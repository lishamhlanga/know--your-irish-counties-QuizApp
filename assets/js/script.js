
//declare the UI elememts
const ul = document.getElementById('ul');
const nextButton = document.getElementById('btnNext');
const quizbox = document.getElementById('questionArea');
const opt1 = document.getElementById('opt1');
const opt2 = document.getElementById('opt2');
const opt3 = document.getElementById('opt3');
const opt4 = document.getElementById('opt4');

//create object called app ( contain attributes and variables)
let app = {
    questions: [{
        q: 'Which of the following is a county',
        options: ['Green Castle', 'Buncrana', 'Donegal', 'Clomany'],
        answer: 3
      },
      {
        q: 'Complete the sentence .... is a big county',
        options: ['Blackrock', 'Dublin', 'Tramore', 'Brandon'],
        answer: 2
      },
      {
      q: 'Cork belong to which Province',
      options: ['Blackrock', 'Dublin', 'Tramore', 'Brandon'],
      answer: 1
    },
    {
      q: 'Leinster has one of these counties except',
      options: ['Carlow', 'Dublin', 'Kildare', 'Clare'],
      answer: 4
    },
    {
      q: 'Complete the sentence .... is a big county',
      options: ['Blackrock', 'Dublin', 'Tramore', 'Brandon'],
      answer: 3
    },
    {
      q: 'Find the sentence .... is a big county',
      options: ['Blackrock', 'Dublin', 'Tramore', 'Brandon'],
      answer: 1
    },
    {
      q: 'Solve the sentence .... is a big county',
      options: ['Blackrock', 'Dublin', 'Tramore', 'Brandon'],
      answer: 2
    },
    {
      q: 'Multiply  the sentence .... is a big county',
      options: ['Blackrock', 'Dublin', 'Tramore', 'Brandon'],
      answer: 3
    },
    {
      q: 'Remove the sentence .... is a big county',
      options: ['Blackrock', 'Dublin', 'Tramore', 'Brandon'],
      answer: 1
    },
    {
      q: 'Decide the sentence .... is a big county',
      options: ['Blackrock', 'Dublin', 'Tramore', 'Brandon'],
      answer: 3
    },
    {
      q: 'Complete the sentence .... is a big county',
      options: ['Blackrock', 'Dublin', 'Tramore', 'Brandon'],
      answer: 2
    },
    {
      q: 'Complete the sentence .... is a big county',
      options: ['Blackrock', 'Dublin', 'Tramore', 'Brandon'],
      answer: 2
    },
    {
      q: 'Complete the sentence .... is a big county',
      options: ['Blackrock', 'Dublin', 'Tramore', 'Brandon'],
      answer: 1
    },
    {
      q: 'Complete the sentence .... is a big county',
      options: ['Blackrock', 'Dublin', 'Tramore', 'Brandon'],
      answer: 3
    },
    {
      q: 'Complete the sentence .... is a big county',
      options: ['Blackrock', 'Dublin', 'Tramore', 'Brandon'],
      answer: 1
    },
    {
      q: 'Complete the sentence .... is a big county',
      options: ['Blackrock', 'Dublin', 'Tramore', 'Brandon'],
      answer: 3
    },
    {
      q: 'Which is the odd one out...',
      options: ['Blackrock', 'Dublin', 'Tramore', 'Brandon'],
      answer: 2
    },
      {
        q: 'Which is the odd one out',
        options: ['Blackrock', 'Dublin', 'Tramore', 'Brandon'],
        answer: 2
      },
  
    ],
    index: 0,

    //take index and select the question of that UI and load it up

  load: function() {
    if (this.index <= this.questions.length - 1) {
      quizbox.innerHTML = this.index + 1 + ". " + this.questions[this.index].q;
      opt1.innerHTML = this.questions[this.index].options[0];
      opt2.innerHTML = this.questions[this.index].options[1];
      opt3.innerHTML = this.questions[this.index].options[2];
      opt4.innerHTML = this.questions[this.index].options[3];
    } else {
      quizbox.innerHTML = "Quiz Completed! Thank you";
      ul.style.display = "none";
      nextButton.style.display = "none";
    }
  },
  next: function() {
    this.index++;
    this.load();
  },

  //apply green background if correct

  check: function(ele) {
    let id = ele.id.split('');
    if (id[id.length - 1] == this.questions[this.index].answer) {
      this.score++;
      ele.className = "correct";
    alert("Hey! You got it right!");
      this.scoreArea();
    } else {
      ele.className = "wrong";
      alert("Hey! sorry wrong answer try next time");
    }
  },

  //look at all the children and prevent click

  preventClick: function() {
    for (let i = 0; i < ul.children.length; i++) {
      ul.children[i].style.pointerEvents = "none";
    }
  },
  allowClick: function() {
    for (let i = 0; i < ul.children.length; i++) {
      ul.children[i].style.pointerEvents = "auto";
      ul.children[i].className = ''
    }
  },
  
  //initial score is 0 and when answered correct increase score by 1

  score: 0,

  //display the score relative to the total number questions

  scoreArea: function() {
    scoreArea.innerHTML = this.score + "/" + this.questions.length;
  }
}