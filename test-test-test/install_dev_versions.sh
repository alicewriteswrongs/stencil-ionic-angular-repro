#!/bin/bash

rm -rf .angular/

npm install

npm install file:/tmp/ionic/ionic-core-8.0.1.tgz
npm install file:/tmp/ionic/ionic-angular-8.0.1.tgz
