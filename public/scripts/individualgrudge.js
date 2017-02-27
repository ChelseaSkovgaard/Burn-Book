$(document).ready(function() {
  const id = parseInt(window.location.pathname.split("/")[1]);
  getIndividualGrudgeFromServer(id);
})

const getIndividualGrudgeFromServer = (id) => {
  axios.get(`/api/grudges/${id}`)
  .then(response => {
    let grudge = response.data;
    appendGrudge(grudge);
  })
}

const updateForgivenessStatus = (id) => {
  axios.put(`/api/grudges/${id}`)
  .then(res => {
    clearDetails();
    getIndividualGrudgeFromServer(id);
  })
}

const clearDetails = () => {
  $('.individual-grudge').html('');
}

const appendGrudge = (grudge) => {
    let name = grudge.grudge.name;
    let offense = grudge.grudge.offense;
    let date = grudge.grudge.date;
    let status = grudge.grudge.status;
    let id = grudge.grudge.id;
    let individualGrudge = individualGrudgeTemplate(name, offense, date, status, id)
    $('.individual-grudge').append(individualGrudge)
  }
