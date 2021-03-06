describe('sorting by Name', function(){
  let grudges = [
    {
      id: 1,
      name: 'Sam',
      offense: 'eating the last eggo',
      date: 'Thu Feb 23 2017 12:21:11 GMT-0700 (MST)',
      status: true
    },
    {
      id: 0,
      name: 'Chloe',
      offense: 'stinky farts',
      date: 'Thu Feb 23 2017 12:21:11 GMT-0700 (MST)',
      status: false
    },
  ]
    it('sorts by name', function(){
      let sortedGrudges = sortByName(grudges);
      let firstGrudge = { id: 0, name: 'Chloe', offense: 'stinky farts', date: 'Thu Feb 23 2017 12:21:11 GMT-0700 (MST)', status: false }
      let secondGrudge = { id: 1, name: 'Sam', offense: 'eating the last eggo', date: 'Thu Feb 23 2017 12:21:11 GMT-0700 (MST)', status: true }
      expect(sortedGrudges[0]).to.eql(firstGrudge)
      expect(sortedGrudges[1]).to.eql(secondGrudge)
    });
})

describe('sorting by Date', function(){
  let grudges = [
    {
      id: 1,
      name: 'Sam',
      offense: 'eating the last eggo',
      date: 'Fri Feb 24 2017 12:21:11 GMT-0700 (MST)',
      status: true
    },
    {
      id: 0,
      name: 'Chloe',
      offense: 'stinky farts',
      date: 'Thu Feb 23 2017 12:21:11 GMT-0700 (MST)',
      status: false
    },
  ]
    it('sorts by date', function(){
      let sortedGrudges = sortByDate(grudges);
      let firstGrudge = { id: 0, name: 'Chloe', offense: 'stinky farts', date: 'Thu Feb 23 2017 12:21:11 GMT-0700 (MST)', status: false }
      let secondGrudge = { id: 1, name: 'Sam', offense: 'eating the last eggo', date: 'Fri Feb 24 2017 12:21:11 GMT-0700 (MST)', status: true }
      expect(sortedGrudges[0]).to.eql(secondGrudge)
      expect(sortedGrudges[1]).to.eql(firstGrudge)
    });
})

describe('clear inputs', function(){
  let nameInput = $('#name-input')

    it('clears inputs', function(){
      clearInputs()
      expect(nameInput).to.be.empty()
    });
})

describe('clear list', function(){
  let listContainer = $('.list-container')

    it('clears inputs', function(){
      clearList()
      expect(listContainer).to.be.empty()
    });
})

describe('clear count', function(){

    it('clears total count', function(){
      let total = $('#total-people').html('span')
      clearList()
      expect(total).to.be.empty()
    });

    it('clears forgiven count', function(){
      let totalForgiven = $('#total-forgiven').html('span')
      clearList()
      expect(totalForgiven).to.be.empty()
    });

    it('clears unforgiven count', function(){
      let totalUnforgiven = $('#total-unforgiven').html('span')
      clearList()
      expect(totalUnforgiven).to.be.empty()
    });
})
