# Lab 17: AWS: S3 and Lambda

## a description of how to use your lambda.
The lambda runs automatically when I upload a jpg or png into my `lab17bucket`. It makes a thumbnail out of that image and saves it in `lab17bucket-resized`. The function adds "resized-" to the beginning of the name of the thumbnail image. For example: `IMG-001` becomes `resized-IMG-001`.

## a description of any issues you encountered during deployment of this lambda
Initally, I had issues with my package.json. I just uploaded the index.js and not a zipped file, so I kept getting errors where `util`,`sharp`, etc. were not defined. Then I had a major permissions issue, where my logs kept saying access denied. I created an IAM role and gave it permissions, but those didn't seem to be working. Then I created a role directly in the function and gave it permissions, and it worked. 

## An image and thumbnail that your Lambda processed
Original Image
![original image](./assets/IMG_0191.jpeg)

Thumbnail
![thumbnail image](./assets/resized-IMG_0191.jpeg)