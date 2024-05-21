import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutGodComponent } from './about-god/about-god.component';
import { ContactComponent } from './contact/contact.component';
import { CartComponent } from './cart/cart.component';
import { AboutComponent } from './about/about.component';
import { CardComponent } from './card/card.component';
import { BookComponent } from './book/book.component';



export const routes: Routes = [

    {
        path:'',
        component:HomeComponent,
        title:'Main'
    },
    {
        path:'about',
        component:AboutComponent,
        title:'About'
    },

    {
        path:'contact',
        component:ContactComponent,
        title:'contact'
    },

    {
        path:'MBTIS',
        component:CardComponent,
        title:'MBTIS'
    },

    
    {
        path:'MBTIS',
        component:ContactComponent,
        title:'MBTIS'
    },

    {
        path:'book',
        component:BookComponent,
        title:'book'
    },

  

  

 

];

export default routes
