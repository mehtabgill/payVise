import React, { Component } from 'react';
import icon from '../../assets/images/icon.png';
import logo from '../../assets/images/logo.png';

export default class GenerateQR extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            memberId: ''
             
        }
    }
    

    render() {
        return (
            <div>

<div class="min-h-screen bg-white">
  <nav class="bg-white border-b border-gray-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex">
          <div class="flex-shrink-0 flex items-center">
            <img class="block lg:hidden h-8 w-auto" src={icon} alt="Memberly logo" />
            <img class="hidden lg:block h-8 w-auto" src={logo} alt="Memberly logo" />
          </div>
  
        </div>

      </div>
    </div>


  
  </nav>

  <div class="py-10">
    <header>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold leading-tight text-gray-900">
          Your Check-in QR Code
        </h1>
      </div>
    </header>
    <main>
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">

        <div class="px-4 py-8 sm:px-0">
          <div class="border-4 border-dashed border-gray-200 rounded-lg h-96">

          <h2>Insert Data here</h2>

          </div>
        </div>

      </div>
    </main>
  </div>
</div>


            </div>
        )
    }
}
