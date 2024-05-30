import { Container, Typography } from '@mui/material';
import React, { Component } from 'react';

class ErrorBoundary extends Component<
  { children: React.ReactNode | React.ReactNode[] },
  { hasError: boolean, error: string }
> {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    console.log({ error });
    return { hasError: true, error: error?.message };
  }

  render() {
    if (this.state.hasError) {
      return (
        <Container maxWidth="sm">
          <Typography variant="h4" align="center" color="error">
            Error
          </Typography>
          <Typography variant="body1" align="center" color="error">
            {this.state?.error}
          </Typography>
        </Container>
      )
    }

    return this.props.children;
  }
}

export { ErrorBoundary };
