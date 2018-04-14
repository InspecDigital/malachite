import PropTypes from 'prop-types';

export const PROPTYPES = {
  form: PropTypes.object,
  task: PropTypes.object,
  updateTaskCallback: PropTypes.func,
  saveTaskCallback: PropTypes.func,
  submitTaskCallback: PropTypes.func,
  toggleTaskCallback: PropTypes.func
};

export const DEFAULT_PROPS = {
  form: null,
  task: {},
  updateTaskCallback: null,
  saveTaskCallback: null,
  submitTaskCallback: null,
  toggleTaskCallback: null
};

export const SCHEMA_KEYS = {
  help: 'help',
  required: 'required',
  title: 'title'
};
