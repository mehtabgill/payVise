import React, { Component } from 'react';
import icon from '../../assets/images/icon.png';
import logo from '../../assets/images/logo.png';
import QRCode from 'qrcode.react';

export default class GenerateQR extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
    
                value: '',
                size: 300,
                fgColor: '#000000',
                bgColor: '#ffffff',
                level: 'L',
                renderAs: 'svg',
                includeMargin: false,
                includeImage: true,
                imageH: 24,
                imageW: 24,
                imageX: 0,
                imageY: 0,
                imageSrc: icon,
                imageExcavate: true,
                centerImage: true,
                userInputValue: null
       
        }
    }
    
    onUserInput = (e) => {
        this.setState({ [e.target.id]: e.target.value });

        console.log(this.state.userInputValue)
    }

    render() {
        let memberId = this.props.match.params.memberId;
        const { userInputValue } = this.state
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

         
        { memberId && 
                <div>
                <h1>Member ID: {memberId}</h1>
               <QRCode
                  value={memberId}
                  size={this.state.size}
                  fgColor={this.state.fgColor}
                  bgColor={this.state.bgColor}
                  level={this.state.level}
                  renderAs={this.state.renderAs}
                  includeMargin={this.state.includeMargin}
                  imageSettings={
                    this.state.includeImage
                      ? {
                          src: this.state.imageSrc,
                          height: this.state.imageH,
                          width: this.state.imageW,
                          x: this.state.centerImage ? null : this.state.imageX,
                          y: this.state.centerImage ? null : this.state.imageY,
                          excavate: this.state.imageExcavate,
                        }
                      : null
                  }
                />

                </div>
   
        }

        {!memberId &&
           <div>
           <label for="member_id" class="block text-sm font-medium leading-5 text-gray-700">Please enter your member ID: </label>
           <div class="mt-1 relative rounded-md shadow-sm">
             <input id="userInputValue" class="form-input block w-full sm:text-sm sm:leading-5" placeholder="ID: 1234" 
                    onChange={this.onUserInput}
                    value={userInputValue}/>
           </div>
            
            {/* {this.state.userInputValue} */}
            
            {this.state.userInputValue && 
             <QRCode
             value= {this.state.userInputValue}
             size={this.state.size}
             fgColor={this.state.fgColor}
             bgColor={this.state.bgColor}
             level={this.state.level}
             renderAs={this.state.renderAs}
             includeMargin={this.state.includeMargin}
             imageSettings={
               this.state.includeImage
                 ? {
                    //  src: this.state.imageSrc,
                     height: this.state.imageH,
                     width: this.state.imageW,
                     x: this.state.centerImage ? null : this.state.imageX,
                     y: this.state.centerImage ? null : this.state.imageY,
                     excavate: this.state.imageExcavate,
                   }
                 : null
             }
           />
            }
          

         </div>
         
         

        
        }

          
        


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
