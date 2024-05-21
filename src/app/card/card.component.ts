import { Component, EventEmitter, Output, importProvidersFrom  } from '@angular/core';
import { FilterComponent } from '../filter/filter.component';
import { NgFor, NgIf } from '@angular/common';
import { Event } from '@angular/router';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgFor, NgIf, FilterComponent,],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  @Output()
  choosenWord:EventEmitter<string>  = new EventEmitter<string>()

  myFunction(ganre:string){
   this.choosenWord.emit(ganre)
  }

  mbtis = [
    {
      name:'INTJ',
      information:'INTJ (Architect) is a personality type with the Introverted, Intuitive, Thinking, and Judging traits. These thoughtful tacticians love perfecting the details of life, applying creativity and rationality to everything they do. Their inner world is often a private, complex one',
      type:'Architect',
      imgSrc:'https://i.pinimg.com/originals/7d/13/5f/7d135f0f3a11c5a55b4aff387e9b65ef.png?fbclid=IwAR2MnpBjCwoZ8ZH-pHYPpY2Uwsg8shavUcZl8k9P61PxNmT_aRmXxItwS3g',
      p: 'analyst',
  
    },
    {
      name:'INTP',
      information:'INTP (Logician) is a personality type with the Introverted, Intuitive, Thinking, and Prospecting traits. These flexible thinkers enjoy taking an unconventional approach to many aspects of life. They often seek out unlikely paths, mixing willingness to experiment with personal creativity.',
      type:'logician',
      imgSrc:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Intp-logician.svg/1200px-Intp-logician.svg.png?fbclid=IwAR18F5nUCkYPpeMELbVdnhIR23eoYfmPJf3LKtAiGbsS_CiiiW0rApXf7Kc',
      p: 'analyst',
  
    },
    {
      name:'ENTJ',
      information:'ENTJ (Commander) is a personality type with the Extraverted, Intuitive, Thinking, and Judging traits. They are decisive people who love momentum and accomplishment. They gather information to construct their creative visions but rarely hesitate for long before acting on them',
      type:'Introduction',
      imgSrc:'https://i.pinimg.com/originals/86/6f/25/866f255f0476196c50cca8cc445a4ef9.png',
      p: 'analyst',
  
    },
    {
      name:'ENTP',
      information:'ENTP (Debater) is a personality type with the Extraverted, Intuitive, Thinking, and Prospecting traits. They tend to be bold and creative, deconstructing and rebuilding ideas with great mental agility. They pursue their goals vigorously despite any resistance they might encounter',
      type:'Introduction',
      imgSrc:'https://i.pinimg.com/originals/2d/d8/9a/2dd89a9de127335c06b7aa8506438d8d.png',
      p: 'analyst',
  
    },
    {
      name:'INFJ',
      information:'INFJ (Advocate) is a personality type with the Introverted, Intuitive, Feeling, and Judging traits. They tend to approach life with deep thoughtfulness and imagination. Their inner vision, personal values, and a quiet, principled version of humanism guide them in all things',
      type:'advocate',
      imgSrc:'https://i.pinimg.com/originals/48/d1/da/48d1dadccc82935d87b9f9460d06fe1e.png',
      p: 'diplomat',
  
    },
    {
      name:'INFP',
      information:'INFP (Mediator) is a personality type with the Introverted, Intuitive, Feeling, and Prospecting traits. These rare personality types tend to be quiet, open-minded, and imaginative, and they apply a caring and creative approach to everything they do',
      type:'mediator',
      imgSrc:'https://i.pinimg.com/originals/52/be/0e/52be0ee053f423e367b428d7c3c83520.png',
      p: 'mediator',
  
    },
    {
      name:'ENFJ',
      information:'ENFJ (Protagonist) is a personality type with the Extraverted, Intuitive, Feeling, and Judging traits. These warm, forthright types love helping others, and they tend to have strong ideas and values. They back their perspective with the creative energy to achieve their goals.',
      type:'Protagonist',
      imgSrc:'https://storage.googleapis.com/neris/public/images/types/enfj.png',
      p: 'Protagonist',
  
    },
    {
      name:'ENFP',
      information:'ENFP (Campaigner) is a personality type with the Extraverted, Intuitive, Feeling, and Prospecting traits. These people tend to embrace big ideas and actions that reflect their sense of hope and goodwill toward others. Their vibrant energy can flow in many directions.',
      type:'Campaigner',
      imgSrc:'https://i.pinimg.com/originals/50/fd/b1/50fdb1536d95ca29c1052aadd57c0d34.png',
      p: 'diplomat',
  
    },
    {
      name:'ISTJ',
      information:'ISTJ (Logistician) is a personality type with the Introverted, Observant, Thinking, and Judging traits. These people tend to be reserved yet willful, with a rational outlook on life. They compose their actions carefully and carry them out with methodical purpose',
      type:'Logistician',
      imgSrc:'https://i.pinimg.com/originals/bd/80/22/bd80229dd7d6290c9b2b98e6326a5b52.png?fbclid=IwAR09NCAH_0DvDid5eLvAEPMCJwgEkTNNxcp5KWG2OolKqdkgFFVuG-Q4u2A',
      p: 'sentinel',
  
    },
    {
      name:'ISFJ',
      information:'ISFJ (Defender) is a personality type with the Introverted, Observant, Feeling, and Judging traits. These people tend to be warm and unassuming in their own steady way. They’re efficient and responsible, giving careful attention to practical details in their daily lives.',
      type:'Defender',
      imgSrc:'https://www.16personalities.com/static/images/personality-types/avatars/isfj-defender.svg?v=3&fbclid=IwAR3HfiNqS3XOdtchAPKfq6p_B0bMM8nNmfrw8F7kRrTQZLRffgQ-YQdVvog+',
      p: 'sentinel',
  
    },
    {
      name:'ESTJ',
      information:'ESTJ (Executive) is a personality type with the Extraverted, Observant, Thinking, and Judging traits. They possess great fortitude, emphatically following their own sensible judgment. They often serve as a stabilizing force among others, able to offer solid direction amid adversity',
      type:'Executive',
      imgSrc:'https://i.pinimg.com/originals/fb/2a/1d/fb2a1db9b11234df4633693112a915fb.png?fbclid=IwAR3ndmanXznfOEnnQUs8bs7Im5IsLpQ7CkT40yOAGiTopIsX4fzKeoo7g5M',
      p: 'sentinel',
  
    },
    {
      name:'ESFJ',
      information:'ESFJ (Consul) is a personality type with the Extraverted, Observant, Feeling, and Judging traits. They are attentive and people-focused, and they enjoy taking part in their social community. Their achievements are guided by decisive values, and they willingly offer guidance to others.',
      type:'Consul',
      imgSrc:'https://i.pinimg.com/originals/77/3f/8a/773f8ab5786ff5f10fd45c04a9028775.png',
      p: 'sentinel',
  
    },
    {
      name:'ISTP',
      information:'ISTP (Virtuoso) is a personality type with the Introverted, Observant, Thinking, and Prospecting traits. They tend to have an individualistic mindset, pursuing goals without needing much external connection. They engage in life with inquisitiveness and personal skill, varying their approach as needed',
      type:'Virtuoso',
      imgSrc:'https://i.pinimg.com/originals/19/b1/39/19b13978bc9611decd22d5e3ccb6f1f1.png',
      p: 'explorers',
  
    },
    {
      name:'ISFP',
      information:'ISFP (Adventurer) is a personality type with the Introverted, Observant, Feeling, and Prospecting traits. They tend to have open minds, approaching life, new experiences, and people with grounded warmth. Their ability to stay in the moment helps them uncover exciting potentials.',
      type:'Adventurer',
      imgSrc:'https://i.pinimg.com/originals/81/89/d0/8189d0e91ec4045d05384347a13a757b.png',
      p: 'explorers',
  
    },
    {
      name:'ESTP',
      information:'ESTP (Entrepreneur) is a personality type with the Extraverted, Observant, Thinking, and Prospecting traits. They tend to be energetic and action-oriented, deftly navigating whatever is in front of them. They love uncovering life’s opportunities, whether socializing with others or in more personal pursuits.',
      type:'Entrepreneur',
      imgSrc:'https://i.pinimg.com/originals/0f/99/57/0f9957d4c620ff1acd90e44d42743693.png',
      p: 'explorers',
  
    },
    {
      name:'ESFP',
      information:'ESFP (Entertainer) is a personality type with the Extraverted, Observant, Feeling, and Prospecting traits. These people love vibrant experiences, engaging in life eagerly and taking pleasure in discovering the unknown. They can be very social, often encouraging others into shared activities.',
      type:'Entertainer',
      imgSrc:'https://i.pinimg.com/originals/b0/8c/ea/b08ceaba12a803204caa60947552cc13.png',
      p: 'explorers',
  
    },
  
  ]
  
  
  
  
      safosstoYuti:string = '';
      gpost(amanati:string){
        this.safosstoYuti = amanati
        console.log( this.safosstoYuti)
      }
  
  
      
  
      filterWord:string = 'all'
  
      konvertisGaxsna(sunrise:string){
        this.filterWord = sunrise
   
      }
}
