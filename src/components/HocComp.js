import React from 'react';

const HocComp = (WrappedComponent) => {
  return class extends React.Component {
    render() {
      return (
        <div>
          <h1 className='text-danger'>This component is wrapped in  HOC component</h1>
          <WrappedComponent {...this.props} />
          <h1 className='text-danger'>Hoc ends</h1>
        </div>
      );
    }
  };
};

export default HocComp;
