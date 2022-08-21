import React, { Component } from 'react';
import icon from '../../assets/images/payvise.png';
import screenshot from '../../assets/images/app.png';
import anmol from '../../assets/images/anmol.jpeg';
import mehtab from '../../assets/images/mehtab.jpg';

const textArray = ['Martial Arts Studio', 'Jiu Jitsu Gym', 'MMA Gym', 'Karate Dojo'];

export default class Hero extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            mobileHamburgerClicked: false,
            contactDetailsSent: false,
            textIdx: 0,
            full_name: '',
            business_name: '',
            phone: '',
            email: ''
             
        }
    }

    componentDidMount() {
        this.timeout = setInterval(() => {
          let currentIdx = this.state.textIdx;
          this.setState({ textIdx: currentIdx + 1 });
        }, 3000);
    }

    componentDidUnmount() {
        clearInterval(this.timeout);
    }

    changeHandler = (e)  => {
        this.setState({ [e.target.id]: e.target.value });
    }

    contactSubmitHandler = (e) => {
        e.preventDefault()

        return fetch('https://memberly-backend.herokuapp.com/contact/', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            full_name : this.state.full_name,
            business_name: this.state.business_name,
            phone: this.state.phone,
            email: this.state.email
          })
        })
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          if (json.id) {
              this.setState({
                contactDetailsSent: true
              });
          }
          return json;
        })
        .catch((error) => {
          console.error(error);
        });
    }


    mobileHamburgerClickHandler = () =>  {
        console.log('clicked');
        let toggleClose = !this.state.mobileHamburgerClicked
        this.setState({
            mobileHamburgerClicked: toggleClose
        })
    }

    
    
    render() {
        let textThatChanges = textArray[this.state.textIdx % textArray.length];
        const { full_name, business_name, phone, email } = this.state

        return (
            <div>
                
{/* Hero Sections */}
<div class="bg-gray-50">
  <div class="relative overflow-hidden">
    <div class="block absolute inset-y-0 h-full w-full">
      <div class="relative h-full">
        <svg class="absolute right-full transform translate-y-1/3 translate-x-1/4 md:translate-y-1/2 sm:translate-x-1/2 lg:translate-x-full" width="404" height="784" fill="none" viewBox="0 0 404 784">
          <defs>
            <pattern id="e229dbec-10e9-49ee-8ec3-0286ca089edf" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="784" fill="url(#ad9a0a02-b58e-4a1d-8c36-1b649889af63)" />
        </svg>
        <svg class="absolute left-full transform -translate-y-3/4 -translate-x-1/4 sm:-translate-x-1/2 md:-translate-y-1/2 lg:-translate-x-3/4" width="404" height="784" fill="none" viewBox="0 0 404 784">
          <defs>
            <pattern id="d2a68204-c383-44b1-b99f-42ccff4e5365" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="784" fill="url(#478e97d6-90df-4a89-8d63-30fdbb3c7e57)" />
        </svg>
      </div>
    </div>

    <div class="relative pt-6 pb-12 lg:pb-20">
      <div class="max-w-screen-xl mx-auto px-4 sm:px-6">
        <nav class="relative flex items-center justify-between sm:h-10 md:justify-center">
          <div class="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
            <div class="flex items-center justify-between w-full md:w-auto">
              <a href="#" aria-label="Home">
                <img class="h-8 w-auto sm:h-10" src={icon} alt="Logo" />
              </a>
              <div class="-mr-2 flex items-center md:hidden">
                {/* Button for Mobile Hamburger Menu */}
                <button type="button" onClick={this.mobileHamburgerClickHandler} class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out" id="main-menu" aria-label="Main menu" aria-haspopup="true">
                  <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div class="hidden md:flex md:space-x-10">
            {/* <a href="#" class="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">Product</a> */}
            <a href="#how-it-works" class="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">How it works</a>
            <a href="#features" class="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">Features</a>
            <a href="#faq" class="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">FAQs</a>
            <a href="#about-us" class="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">About us</a>
          </div>
          <div class="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
            <span class="inline-flex rounded-md shadow">
              <a href="https://app.usememberly.com/" class="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-600 bg-white hover:text-indigo-500 focus:outline-none focus:border-indigo-300 focus:shadow-outline-indigo active:bg-gray-50 active:text-indigo-700 transition duration-150 ease-in-out">
                Log in
              </a>
            </span>
          </div>
        </nav>
      </div>

      
        {/* Mobile menu, show/hide based on menu open state.

        Entering: "duration-150 ease-out"
          From: "opacity-0 scale-95"
          To: "opacity-100 scale-100"
        Leaving: "duration-100 ease-in"
          From: "opacity-100 scale-100"
          To: "opacity-0 scale-95" */}
      
      { this.state.mobileHamburgerClicked &&
    <div class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
    <div class="rounded-lg shadow-md">
      <div class="rounded-lg bg-white shadow-xs overflow-hidden" role="menu" aria-orientation="vertical" aria-labelledby="main-menu">
        <div class="px-5 pt-4 flex items-center justify-between">
          <div>
            <img class="h-8 w-auto" src={icon} alt="" />
          </div>
          <div class="-mr-2">
            <button type="button" onClick = {this.mobileHamburgerClickHandler} class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out" aria-label="Close menu">
              <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        <div class="px-2 pt-2 pb-3">
          <a href="#how-it-works" class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out" role="menuitem">How it works</a>
          <a href="#features" class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out" role="menuitem">Features</a>
          <a href="#faq" class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out" role="menuitem">FAQs</a>
          <a href="#about-us" class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out" role="menuitem">About Us</a>
        </div>
        <div>
          <a href="https://app.usememberly.com/" class="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100 hover:text-indigo-700 focus:outline-none focus:bg-gray-100 focus:text-indigo-700 transition duration-150 ease-in-out" role="menuitem">
            Log in
          </a>
        </div>
      </div>
    </div>
  </div>

      }
  

      <div class="mt-10 mx-auto max-w-screen-xl px-4 sm:px-6 md:mt-16 lg:mt-20">
        <div class="text-center">
          <h2 class="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
            {/* Check-in data to enrich your */}
            Enable your customers to
            <br />
            <span class="text-indigo-600">Buy Now Pay Later</span>
            {/* <span class="text-indigo-600">{textThatChanges}</span> */}
          </h2>
          <p class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
Increae your business revenue by taking Buy Now Play Later payments from your customers. You get paid the full amount upfront. For no fees.</p>
        </div>
      </div>
    </div>
    <div class="relative">
      <div class="absolute inset-0 flex flex-col">
        <div class="flex-1"></div>
        <div class="flex-1 w-full bg-gray-800"></div>
      </div>
      <div class="max-w-screen-xl mx-auto px-4 sm:px-6">
        <img class="relative rounded-lg shadow-lg" src={screenshot} alt="App screenshot" />
      </div>
    </div>
  </div>

</div>

{/* How it works */}

<div id={'how-it-works'} class="py-12 bg-white">
  <div class="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-screen-xl lg:px-8">
  <h3 class="mt-2 text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
        How it works
      </h3> 
    <div class="lg:grid lg:grid-cols-3 lg:gap-8">
      <div>
 
        <div class="mt-5">
          <h5 class="text-lg leading-6 font-medium text-gray-900">1) Sign-up</h5>
          <p class="mt-2 text-base leading-6 text-gray-500">
            Sign-up with your business email. Get Free Demo.
          </p>
        </div>
      </div>
      <div class="mt-10 lg:mt-0">
        {/* <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
     
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
          </svg>
        </div> */}
        <div class="mt-5">
          <h5 class="text-lg leading-6 font-medium text-gray-900">2) Start Scanning</h5>
          <p class="mt-2 text-base leading-6 text-gray-500">
            We provide your unique QR code. Customers scan them to Buy-Now-Pay-Later. You get paid upfront.
          </p>
        </div>
      </div>
      <div class="mt-10 lg:mt-0">
        {/* <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">

          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div> */}
        <div class="mt-5">
          <h5 class="text-lg leading-6 font-medium text-gray-900">3) Sit back and relax</h5>
          <p class="mt-2 text-base leading-6 text-gray-500">
            Get instant payments. Grow your scale.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

{/* Feature Sections */}
<div id={'features'} class="py-12 bg-white">
  <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center">
      {/* <p class="text-base leading-6 text-indigo-600 font-semibold tracking-wide uppercase">Transactions</p> */}
      <h3 class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
        A better way to take payments:
      </h3>
      {/* <p class="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto">
        Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.
      </p> */}
    </div>

    <div class="mt-10">
      <ul class="md:grid md:grid-cols-2 md:col-gap-8 md:row-gap-10">

        <li class="mt-10 md:mt-0">
          <div class="flex">
            <div class="flex-shrink-0">
              <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <div class="ml-4">
              <h4 class="text-lg leading-6 font-medium text-gray-900">Payments are instant</h4>
              <p class="mt-2 text-base leading-6 text-gray-500">
              Customers simply scan your QR code upon checkout. Log in with AfterPay and you get paid within minutes.
              </p>
            </div>
          </div>
        </li>
        <li class="mt-10 md:mt-0">
          <div class="flex">
            <div class="flex-shrink-0">
              <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
            </div>
            <div class="ml-4">
              <h4 class="text-lg leading-6 font-medium text-gray-900">Grow your scale and Ticket size</h4>
              <p class="mt-2 text-base leading-6 text-gray-500">
              Expand your range of customers and increase your average order by providing them with BNPL payment methods.
              </p>
            </div>
          </div>
        </li>



        <li class="mt-10 md:mt-0">
          <div class="flex">
            <div class="flex-shrink-0">
              <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              </div>
            </div>
            <div class="ml-4">
              <h4 class="text-lg leading-6 font-medium text-gray-900">Customer experince tracing</h4>
              <p class="mt-2 text-base leading-6 text-gray-500">
              We provide active interaction with customers to collect feedback.
              </p>
            </div>
          </div>
        </li>
        <li class="mt-10 md:mt-0">
          <div class="flex">
            <div class="flex-shrink-0">
              <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
            </div>
            <div class="ml-4">
              <h4 class="text-lg leading-6 font-medium text-gray-900">Secure and private</h4>
              <p class="mt-2 text-base leading-6 text-gray-500">
                Our security-first system ensures that your store and customer data is always safe. Data is encrypted when stored.
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>




{/* Frequently Asked Questions */}
<div id={'faq'} class="bg-white">
  <div class="max-w-screen-xl mx-auto pt-12 pb-16 sm:pt-16 sm:pb-20 px-4 sm:px-6 lg:pt-20 lg:pb-28 lg:px-8">
    <h2 class="text-3xl  text-center leading-9 font-extrabold text-gray-900">
    Questions? We've got answers
    </h2>
    <div class="mt-6 border-t-2 border-gray-100 pt-10">
      <dl class="md:grid md:grid-cols-2 md:gap-8">
        <div>
          <div>
            <dt class="text-lg leading-6 font-medium text-gray-900">
              How are you different from other payment products?
            </dt>
            <dd class="mt-2">
              <p class="text-base leading-6 text-gray-500">
                PayVise is really easy to use. You don't need to download software or apps and your members never need to create accounts or remember passwords. Other solutions require annual and hidden fees.
              </p>
            </dd>
          </div>
          <div class="mt-12">
            <dt class="text-lg leading-6 font-medium text-gray-900">
              How much does it cost?
            </dt>
            <dd class="mt-2">
              <p class="text-base leading-6 text-gray-500">
              PayVise costs <b>4.99% + 0.42 CAD</b>. There are no contracts and you can cancel anytime because we believe in keeping our customers with a great product and exceptional customer support.
              </p>
            </dd>
          </div>
          <div class="mt-12">
            <dt class="text-lg leading-6 font-medium text-gray-900">
              Will you setup everything for me?
            </dt>
            <dd class="mt-2">
              <p class="text-base leading-6 text-gray-500">
                You got it. We will help you onboard all of your customers at no extra cost.
              </p>
            </dd>
          </div>
        </div>
        <div class="mt-12 md:mt-0">
          <div>
            <dt class="text-lg leading-6 font-medium text-gray-900">
              What if I need help?
            </dt>
            <dd class="mt-2">
              <p class="text-base leading-6 text-gray-500">
                You can reach us by email at contact@usepayvise.com or call us if you have any questions or need help along the way.
              </p>
            </dd>
          </div>
          <div class="mt-12">
            <dt class="text-lg leading-6 font-medium text-gray-900">
              Do I need to install or download anything?
            </dt>
            <dd class="mt-2">
              <p class="text-base leading-6 text-gray-500">
                Nope, PayVise works in your web browser so you can use it on any device with a camera. A laptop, tablet, or smartphone will all work fine.
              </p>
            </dd>
          </div>
          <div class="mt-12">
            <dt class="text-lg leading-6 font-medium text-gray-900">
            Why are you building this?
            </dt>
            <dd class="mt-2">
              <p class="text-base leading-6 text-gray-500">
              We are on a mission to make it easier for you to run and manage your payments. That, and we wanted an excuse to get free samples.
              </p>
            </dd>
          </div>
        </div>
      </dl>
    </div>
  </div>
</div>

{/* Team */}
<div id={'about-us'} class="bg-white">
  <div class="max-w-screen-xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
    <div class="space-y-12">
      <div class="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
        <h2 class="text-3xl leading-9 font-extrabold text-gray-900 sm:tracking-tight sm:text-4xl">Meet our team</h2>
        
        <p class="text-xl leading-7 text-gray-500">We're a small team from Vancouver dedicated to building the best software for Brick and Mortar in Canada.</p>
      </div>
      <ul class="mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:grid-cols-2 lg:max-w-5xl">
        <li>
          <div class="space-y-6">
            <img class="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56" src={anmol} alt="" />
            <div class="space-y-2">
              <div class="text-lg leading-6 font-medium space-y-1">
                <h4>Anubhav Khanna</h4>
                <p class="text-indigo-600">Co-founder</p>
              </div>
              <ul class="flex justify-center space-x-5">
                <li>
                  <a href="https://twitter.com/anmolbajajnet" class="text-gray-400 hover:text-gray-500 transition ease-in-out duration-150">
                    <span class="sr-only">Twitter</span>
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/anubhavkhanna1/" class="text-gray-400 hover:text-gray-500 transition ease-in-out duration-150">
                    <span class="sr-only">LinkedIn</span>
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </li>

        <li>
          <div class="space-y-6">
            <img class="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56" src={mehtab} alt="" />
            <div class="space-y-2">
              <div class="text-lg leading-6 font-medium space-y-1">
                <h4>Mehtab Gill</h4>
                <p class="text-indigo-600">Co-founder</p>
              </div>
              <ul class="flex justify-center space-x-5">
                <li>
                  <a href="https://www.linkedin.com/in/mehtab-gill-61b051125/" class="text-gray-400 hover:text-gray-500 transition ease-in-out duration-150">
                    <span class="sr-only">LinkedIn</span>
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>

{/* Pricing */}





{/* CTA Sections */}
<div class="bg-white">
  <div class="max-w-screen-xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
    <h2 class="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
      Ready to dive in?
      {/* <br />
      Start your free trial today. */}
    </h2>


<div class="relative bg-white">
  <div class="absolute inset-0">
    <div class="absolute inset-y-0 left-0 w-1/2 bg-gray-50"></div>
  </div>
  <div class="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
    <div class="bg-gray-50 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
      <div class="max-w-lg mx-auto">
        <h2 class="text-2xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-3xl sm:leading-9">
          Get in touch
        </h2>
        <p class="mt-3 text-lg leading-6 text-gray-500">
        Fill out the form and we will contact you within one business day.
        </p>
        <dl class="mt-8 text-base leading-6 text-gray-500">
          <div>
            <dt class="sr-only">Postal address</dt>
            <dd>
              <p>PO Box 88613, RPO Newton</p>
              <p>Surrey, BC, Canada V3W 0X1</p>
            </dd>
          </div>
          <div class="mt-6">
            <dt class="sr-only">Phone number</dt>
            <dd class="flex">
        
              <svg class="flex-shrink-0 h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span class="ml-3">
                +1 (236) 833-4517
              </span>
            </dd>
          </div>
          <div class="mt-3">
            <dt class="sr-only">Email</dt>
            <dd class="flex">
  
              <svg class="flex-shrink-0 h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span class="ml-3">
                contact@usepayvise.com
              </span>
            </dd>
          </div>
        </dl>
        <p class="mt-6 text-base leading-6 text-gray-500">
          Looking for careers? Email us your resume.
        </p>
      </div>
    </div>
    <div class="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
      <div class="max-w-lg mx-auto lg:max-w-none">
        <form action="#" onSubmit={this.contactSubmitHandler} method="POST" class="grid grid-cols-1 gap-y-6">
          <div>
            <label for="full_name" class="sr-only">Full name</label>
            <div class="relative rounded-md shadow-sm">
              <input id="full_name" required class="form-input block w-full py-3 px-4 placeholder-gray-500 transition ease-in-out duration-150" placeholder="Full name" 
              onChange={this.changeHandler}
              value={full_name}/>
            </div>
          </div>

          <div>
            <label for="business_name" class="sr-only">Business name</label>
            <div class="relative rounded-md shadow-sm">
              <input id="business_name" required class="form-input block w-full py-3 px-4 placeholder-gray-500 transition ease-in-out duration-150" placeholder="Business name" 
              onChange={this.changeHandler}
              value={business_name}/>
            </div>
          </div>
          

          <div>
            <label for="email" class="sr-only">Email</label>
            <div class="relative rounded-md shadow-sm">
              <input id="email" type="email" required class="form-input block w-full py-3 px-4 placeholder-gray-500 transition ease-in-out duration-150" placeholder="Email" 
              onChange={this.changeHandler}
              value={email}/>
            </div>
          </div>
          <div>
            <label for="phone" class="sr-only">Phone</label>
            <div class="relative rounded-md shadow-sm">
              <input id="phone" required class="form-input block w-full py-3 px-4 placeholder-gray-500 transition ease-in-out duration-150" placeholder="Phone" 
              onChange={this.changeHandler}
              value={phone}/>
            </div>
          </div>
          {/* <div>
            <label for="message" class="sr-only">Message</label>
            <div class="relative rounded-md shadow-sm">
              <textarea id="message" rows="4" class="form-input block w-full py-3 px-4 placeholder-gray-500 transition ease-in-out duration-150" placeholder="Message"></textarea>
            </div>
          </div> */}
          <div class="">
            <span class="inline-flex rounded-md shadow-sm">
              <button type="submit" class="inline-flex justify-center py-3 px-6 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                Submit
              </button>
            </span>
          </div>
        </form>

        { this.state.contactDetailsSent && 

            <div class="rounded-md bg-green-50 p-4 ">
            <div class="flex">
                <div class="flex-shrink-0 ">
                <svg class="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                </div>
                <div class="ml-3 ">
                <p class="text-sm leading-5 text-centre font-medium text-green-800">
                    Contact details sent. We will be in touch with you soon!
                </p>
                </div>
            </div>
            </div>

        }



      </div>
    </div>
  </div>
</div>


  </div>
</div>

{/* Footer */}
<div class="bg-white">
  <div class="max-w-screen-xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
    <nav class="-mx-5 -my-2 flex flex-wrap justify-center">
      <div class="px-5 py-2">
        <a href="#about-us" class="text-base leading-6 text-gray-500 hover:text-gray-900">
          About
        </a>
      </div>
      <div class="px-5 py-2">
        <a href="#features" class="text-base leading-6 text-gray-500 hover:text-gray-900">
          Features
        </a>
      </div>
      <div class="px-5 py-2">
        <a href="#faq" class="text-base leading-6 text-gray-500 hover:text-gray-900">
          FAQs
        </a>
      </div>

    </nav>
    <div class="mt-8 flex justify-center">

      <a href="#" class="ml-6 text-gray-400 hover:text-gray-500">
        <span class="sr-only">Instagram</span>
        <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" />
        </svg>
      </a>
      <a href="#" class="ml-6 text-gray-400 hover:text-gray-500">
        <span class="sr-only">Twitter</span>
        <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      </a>

    </div>
    <div class="mt-8">
      <p class="text-center text-base leading-6 text-gray-400">
        &copy; 2022 PayVise. All rights reserved.
      </p>
    </div>
  </div>
</div>




            </div>
        )
    }
}
