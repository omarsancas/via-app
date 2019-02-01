import axios from 'axios';


// get job titles from
export const getJobTitles = (userData, history) => dispatch => {
  axios
    .get('http://api.dataatwork.org/v1/jobs/autocomplete', userData)
    .then(res => )
    .catch(err =>
    );
};
