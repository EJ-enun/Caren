import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <!-- A div with container id to hold the cards -->
  <div id="container">

    <!-- A div with card class for the first card -->
    <div class="card">
      
        <!-- A dummy avatar image -->
        <img src="https://i.pravatar.cc/300?img=1" alt="Avatar">
      
        <!-- A div with card__details class to hold the details in the card -->
        <div class="card__details">

          <!-- Span with tag class for the tag -->
          <span class="tag">Nature</span>
          <span class="tag">Lake</span>

          <!-- A div with name class for the name of the card -->
          <div class="name">Lago di Braies</div>

          <!-- A paragraph with some dummy text -->
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur sodales morbi dignissim sed diam pharetra vitae ipsum odio.</p>

          <!-- A button element -->
          <button>Read more</button>

        </div>
      
    </div>

     <!-- A div with card class for the second card -->
     <div class="card">
      
        <!-- A dummy avatar image -->
        <img src="https://i.pravatar.cc/300?img=2" alt="Avatar">
      
        <!-- A div with card__details class to hold the details in the card -->
        <div class="card__details">

          <!-- Span with tag class for the tag -->
          <span class="tag">Travel</span>
          <span class="tag">City</span>

          <!-- A div with name class for the name of the card -->
          <div class="name">New York</div>

          <!-- A paragraph with some dummy text -->
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur sodales morbi dignissim sed diam pharetra vitae ipsum odio.</p>

          <!-- A button element -->
          <button>Read more</button>

        </div>
      
    </div>

     <!-- A div with card class for the third card -->
     <div class="card">
      
        <!-- A dummy avatar image -->
        <img src="https://i.pravatar.cc/300?img=3" alt="Avatar">
      
        <!-- A div with card__details class to hold the details in the card -->
        <div class="card__details">

          <!-- Span with tag class for the tag -->
          <span class="tag">Food</span>
          <span class="tag">Pizza</span>

          <!-- A div with name class for the name of the card -->
          <div class="name">Pizza Margherita</div>

          <!-- A paragraph with some dummy text -->
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur sodales morbi dignissim sed diam pharetra vitae ipsum odio.</p>

          <!-- A button element -->
          <button>Read more</button>

        </div>
      
    </div>
    
  </div>
  )
}
