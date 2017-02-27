$(document).ready(function() {
  getGrudgesFromServer();
});

$('.submit-btn').on('click', (e) => {
  e.preventDefault();
  const name = $('#name-input').val();
  const offense = $('#offense-input').val();
  const status = false;
  const date = new Date();
  const id = $('article.burn-item').length;
  postGrudgeToServer(name, offense, status, id, date);
  clearInputs();
  clearList();
  getGrudgesFromServer();
});

$('#sort-name-btn').on('click', (e) => {
  e.preventDefault();
  clearList();
  sortGrudgesName();
});

$('#sort-date-btn').on('click', (e) => {
  e.preventDefault();
  clearList();
  sortGrudgesDate();
});

const postGrudgeToServer = (name, offense, status, id, date) => {
  axios.post('/api/grudges', { name, offense, status, id, date })
}

const getGrudgesFromServer = () => {
  axios.get('/api/grudges')
  .then(response => {
    let grudges = response.data;
    appendGrudges(grudges);
    countPeople(grudges);
  });
}

const sortGrudgesName = () => {
  axios.get('/api/grudges')
    .then(response => {
      let grudges = response.data;
      sortName(grudges);
  });
}

const sortGrudgesDate = () => {
  axios.get('/api/grudges')
    .then(response => {
      let grudges = response.data;
      sortDate(grudges);
  });
}

const appendGrudges = (grudges) => {
  for (var i = 0; i < grudges.length; i++) {
    let name = grudges[i].name
    let id = grudges[i].id
    let grudgeList= grudgeListTemplate(id, name)
    $('.list-container').append(grudgeList)
  }
}

const sortName = (grudges) => {
  let sortedGrudges = sortByName(grudges)
  appendGrudges(sortedGrudges);
}

const sortDate = (grudges) => {
  let sortedGrudges = sortByDate(grudges)
  appendGrudges(sortedGrudges);
}

const countPeople = (grudges) => {
  clearCount();
  let count = grudges.length;
  let forgiven = grudges.filter(grudges => grudges.status === true).length;
  let unforgiven = grudges.filter(grudges => grudges.status !== true).length;
  $('#total-people').append(
    `<span> ${count} </span>`
  )
  $('#total-forgiven').append(
    `<span> ${forgiven} </span>`
  )
  $('#total-unforgiven').append(
    `<span> ${unforgiven} </span>`
  )
}
