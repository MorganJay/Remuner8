import React from 'react';
import swal from '@sweetalert/with-react';

export function Swal() {
  swal(
    <div>
      <h1>Hello world!</h1>
      <p>This is now rendered with JSX!</p>
    </div>
  );
}
