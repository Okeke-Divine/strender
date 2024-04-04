function formatDate(isoDateString) {
    const date = new Date(isoDateString);
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  }
  
export default formatDate