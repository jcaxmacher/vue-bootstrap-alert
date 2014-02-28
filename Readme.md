
# vue-bootstrap-alert

  Bootstrap alert component for Vue.js

## Installation

  Install with [component(1)](http://component.io):

    $ component install obsoleter/vue-bootstrap-alert

## API

  ```javascript
  var Vue = require('vue');
  Vue.component('alert', require('vue-bootstrap-alert'));

  new Vue({
      el: 'body',
      data: {
          alerts: [{
              text: 'Something went wrong',
              type: 'danger',
              closeable: true
          },{
              text: 'Something went right',
              type: 'success',
              closeable: true
          },{
              text: 'Something might be wrong',
              type: 'warning',
              closeable: true
          },{
              text: 'This will disappear',
              type: 'warning',
              closeable: true,
              timeout: 3000
          }]
      }
  });
  ```

  ```html
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-md-9">
          <div class="alerts">
            <alert v-repeat="alerts">{{{text}}}</alert>
          </div>
        </div>
      </div>
    </div>
  </div>
  ```

## License

  The MIT License (MIT)

  Copyright (c) 2014 <copyright holders>

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.
