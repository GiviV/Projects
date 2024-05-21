import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [NgFor,NgIf,],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {


  
    
    books = [  
      {
        name:'Turbulent Architect Superpowers',
        information:'26 pages of insights and advice, researched and developed specifically for Turbulent Architects like you. Instant PDF download. 30-day money-back guarantee.',
        img:'https://www.16personalities.com/static/images/premium/turbulent-handbooks/architect.svg?v=1',
      },
  
      {
        name:'Logician Guide to Inner Peace',
        information:'Instant PDF download. 30-day money-back guarantee. A focused, 29-page e-book to help you build a constructive relationship with your Inner Critic, researched specifically for Logicians (INTP) like you.',
        img:'https://www.16personalities.com/static/images/premium/ebook-covers/niche/logician/logician-guide-to-inner-peace.svg?v=1',
      },
  
      {
        name:'Turbulent Logician Superpowers',
        information:'31 pages of insights and advice, researched and developed specifically for Turbulent Logicians like you. Instant PDF download. 30-day money-back guarantee.',
        img:'https://www.16personalities.com/static/images/premium/turbulent-handbooks/logician.svg?v=1',
      },
  
      {
        name:'Advocate Guide to Boundaries',
        information:'Instant PDF download. 30-day money-back guarantee. A focused, 31-page e-book full of easy-to-follow, actionable guidelines to help Advocates (INFJ) establish healthy boundaries within their relationships.',
        img:'https://www.16personalities.com/static/images/premium/ebook-covers/niche/advocate/advocate-guide-to-boundaries.svg?v=1',
      },
  
      {
        name:'Advocate Guide to Your Dream Job',
        information:'A focused, 23-page e-book with a four-step process for choosing a meaningful career, researched specifically for Advocates (INFJs) like you. Instant PDF download. 30-day money-back guarantee.',
        img:'https://www.16personalities.com/static/images/premium/ebook-covers/niche/advocate/dream-job.svg',
      },
  
      {
        name:'Turbulent Advocate Superpowers',
        information:'25 pages of insights and advice, researched and developed specifically for Turbulent Advocates like you. Instant PDF download. 30-day money-back guarantee.',
        img:'https://www.16personalities.com/static/images/premium/turbulent-handbooks/advocate.svg?v=1',
      },
  
      {
        name:'Mediator Guide to Inner Peace',
        information:'A 25-page guide full of insights and advice on befriending your inner critic, conceived and created specifically for Mediators (INFPs) like you. Instant PDF download. 30-day money-back guarantee.',
        img:'https://www.16personalities.com/static/images/premium/ebook-covers/niche/mediator/inner-peace.svg',
      },
  
      {
        name:'Turbulent Mediator Superpowers',
        information:'20 pages of insights and advice, researched and developed specifically for Turbulent Mediators like you. Instant PDF download. 30-day money-back guarantee.',
        img:'https://www.16personalities.com/static/images/premium/turbulent-handbooks/mediator.svg?v=1',
      },
  
      {
        name:'Turbulent Protagonist Superpowers',
        information:'21 pages of insights and advice, researched and developed specifically for Turbulent Protagonists like you. Instant PDF download. 30-day money-back guarantee.',
        img:'https://www.16personalities.com/static/images/premium/turbulent-handbooks/protagonist.svg?v=1',
      },
  
      {
        name:'Campaigner Guide to Dating',
        information:'A 24-page e-book full of insights and advice on dating, researched and developed specifically for Campaigners (ENFPs) like you. Instant PDF download. 30-day money-back guarantee.',
        img:'https://www.16personalities.com/static/images/premium/ebook-covers/niche/campaigner/dating.svg',
      },
  
      {
        name:'Campaigner Guide to Life Purpose',
        information:'Instant PDF download. 30-day money-back guarantee. A short but powerful 26-page e-book with a four-step process for finding your life purpose, researched specifically for Campaigners (ENFP) like you.',
        img:'https://www.16personalities.com/static/images/premium/ebook-covers/niche/campaigner/life-purpose.svg',
      },
  
      {
        name:'Turbulent Campaigner Superpowers',
        information:'19 pages of insights and advice, researched and developed specifically for Turbulent Campaigners like you. Instant PDF download. 30-day money-back guarantee.',
        img:'https://www.16personalities.com/static/images/premium/turbulent-handbooks/campaigner.svg?v=1',
      },
  
      {
        name:'Defender Guide to Inner Peace',
        information:'Instant PDF download. 30-day money-back guarantee. A focused, 31-page e-book to help you build a constructive relationship with your Inner Critic, researched specifically for Defenders (ISFJ) like you.',
        img:'https://www.16personalities.com/static/images/premium/ebook-covers/niche/defender/defender-guide-to-inner-peace.svg?v=1',
      },
  
      {
        name:'Turbulent Defender Superpowers',
        information:'25 pages of insights and advice, researched and developed specifically for Turbulent Defenders like you. Instant PDF download. 30-day money-back guarantee.',
        img:'https://www.16personalities.com/static/images/premium/turbulent-handbooks/defender.svg?v=1',
      },
  
      {
        name:'Turbulent Adventurer Superpowers',
        information:'21 pages of insights and advice, researched and developed specifically for Turbulent Adventurers like you. Instant PDF download. 30-day money-back guarantee.',
        img:'https://www.16personalities.com/static/images/premium/turbulent-handbooks/adventurer.svg?v=1',
      }
    ]
  }
  

