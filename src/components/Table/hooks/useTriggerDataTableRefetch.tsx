import { useCallback, useState } from 'react';

interface IUseTriggerDataTableRefetchProps {
  triggerCallback?: () => void;
}

const useTriggerDataTableRefetch = ({ triggerCallback }: IUseTriggerDataTableRefetchProps = {}): [
  boolean,
  () => void,
] => {
  const [refetchTrigger, setRefetchTrigger] = useState(false);
  const triggerDataTableRefetch = useCallback(() => {
    setRefetchTrigger((trigger) => !trigger);
    if (triggerCallback) triggerCallback();
  }, []);

  return [refetchTrigger, triggerDataTableRefetch];
};

export default useTriggerDataTableRefetch;
