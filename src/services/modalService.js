import swal from '@sweetalert/with-react';

export function error(title = 'Error', text = '') {
  swal(title, text, 'error');
}

export function success(title = 'Success', text = '') {
  swal(title, text, 'success');
}

export function warning(title = 'Warning', text = '') {
  swal(title, text, 'warning');
}

export function info(title = 'Notice', text = '') {
  swal(title, text, 'info');
}

export default { error, success, info, warning };
