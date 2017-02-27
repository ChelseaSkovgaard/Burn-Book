describe('grudgeListTemplate', function(){

    var id, name, $subject;

    beforeEach(function(){
      id = 1
      name = 'Lacey'
      var subject = grudgeListTemplate(id, name)
      $subject = $(subject)
    });

    it('generates an article', function(){
      $subject.is('article')
    });

    it('contains name and id information', function(){
      var hasNameInSubjectText = $subject.text().indexOf(name) > 0
      var $idSpan = $subject.find('span.burn-category')[0]
      expect(hasNameInSubjectText)
      expect($idSpan.id).to.equal(id.toString())
    });
})

describe('individualGrudgeTemplate', function(){
    var id, name, offense, date, status, $subject;

    beforeEach(function(){
      id: 0
      name: 'Chloe'
      offense: 'stinky farts'
      date: 'Thu Feb 23 2017 12:21:11 GMT-0700 (MST)'
      status: false
      var subject = individualGrudgeTemplate(id, name, offense, date, status)
      $subject = $(subject)
    });

    it('generates an article', function(){
      $subject.is('article')
    });

    it('contains name and id information', function(){
      var name = document.getElementsByClassName('name')
      var name = document.getElementsByClassName('name')
      var name = document.getElementsByClassName('name')
      var name = document.getElementsByClassName('name')
      
      it('has the correct text for name', function(){
        expect(name.innerHTML).to.equal('Chloe')
      });

      it('has the correct text for offense', function(){
        expect(name.innerHTML).to.equal('Chloe')
      });

      it('has the correct text for name', function(){
        expect(name.innerHTML).to.equal('Chloe')
      });

      it('has the correct text for name', function(){
        expect(name.innerHTML).to.equal('Chloe')
      });

    });
})
