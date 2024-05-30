import { FileDownloadOutlined } from '@mui/icons-material';
import { Box, LinearProgress } from '@mui/material';
import { DateTime } from 'luxon';
import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import xlsx from 'node-xlsx';

import { useDataTable } from '@/components/Table/context/DataTableProvider';
import ExportingOverlay from '@/components/Table/controls/export/ExportOverlay';
import isDisplayColumn from '@/components/Table/lib/isDisplayColumn';
import { DefaultDataType } from '@/components/Table/types/data-table';
import Button from '@components/styled/Button';
import { useSnackbar } from '@context/snackbar';
import useDateTime from '@hooks/useDateTime';
import formatXlsxTitle from '@/lib/formatXlsxTitle';

const ExportButton = memo(
  ({
    createExport,
    hasCompletedFirstFetch,
    dataTestId,
  }: {
    createExport: () => Promise<void>;
    hasCompletedFirstFetch: boolean;
    dataTestId: string;
  }) => {
    const { t } = useTranslation('components');
    return (
      <Button
        variant="text"
        onClick={createExport}
        disabled={!hasCompletedFirstFetch}
        styledVariant="tableControl"
        data-testid={dataTestId}
      >
        <FileDownloadOutlined /> {t('common.export').toUpperCase()}
      </Button>
    );
  },
);

const DataTableExportControls = () => {
  const { t } = useTranslation('components');
  const { tableId, allColumns, hasCompletedFirstFetch, getExportData } = useDataTable();
  const { showMessage } = useSnackbar();
  const { displayDate } = useDateTime();

  const exportEnabledColumns = allColumns.filter(
    (c) =>
      c.columnDef.meta?.exportOnly ||
      (!isDisplayColumn(c.id) && c.columnDef.meta.enableExport && c.getIsVisible()),
  );

  const [exporting, setExporting] = useState(false);

  const createExportFile = (data: DefaultDataType[]) => {
    const headers = exportEnabledColumns.map((c) => c.columnDef.header as string);
    const processedData = data.map((row) =>
      exportEnabledColumns.map((column) => {
        const exportFormatter = column.columnDef.meta?.exportFormatter;
        if (exportFormatter && typeof exportFormatter === 'function') {
          return exportFormatter(row[column.id], row);
        } else {
          return row[column.id];
        }
      }),
    );
    const dataWithHeaders = [headers, ...processedData];

    const fileName = formatXlsxTitle(
      `${tableId}_${displayDate({
        date: DateTime.now().toMillis(),
        timezone: DateTime.now().zoneName,
      })}`,
    );

    const buffer = xlsx.build([
      {
        name: fileName.substring(0, 31), // Max sheet name length is 31 characters
        data: dataWithHeaders,
        options: {},
      },
    ]);

    // Create a Blob from the buffer
    const blob = new Blob([buffer], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    });

    // Create a Blob URL for the Blob
    const blobURL = window.URL.createObjectURL(blob);

    // Create a hidden <a> element
    const link = document.createElement('a');
    link.href = blobURL;
    link.download = fileName;
    link.style.display = 'none';

    // Append the <a> element to the body
    document.body.appendChild(link);

    // Simulate a click on the <a> element
    link.click();

    // Remove the <a> element from the body
    document.body.removeChild(link);

    setExporting(false);
  };

  const createExport = useCallback(async () => {
    setExporting(true);

    const data = await getExportData();

    try {
      createExportFile(data);
    } catch (error) {
      showMessage({
        type: 'error',
        message: t('dataTable.errorExportBuild', { errorMessage: error.message }),
      });
      setExporting(false);
    }
  }, [getExportData]);

  return (
    <Box>
      <ExportButton
        createExport={createExport}
        hasCompletedFirstFetch={hasCompletedFirstFetch}
        dataTestId={`data-table-${tableId}-export-button`}
      />
      {exporting && (
        <ExportingOverlay data-testid={`data-table-${tableId}-exporting-overlay`}>
          <FileDownloadOutlined
            sx={{ color: (theme) => theme.palette.info.main, fontSize: '50px' }}
          />
          <LinearProgress
            sx={{ position: 'absolute', bottom: 20, left: 25, width: '200px', height: '10px' }}
          />
        </ExportingOverlay>
      )}
    </Box>
  );
};

export default DataTableExportControls;
