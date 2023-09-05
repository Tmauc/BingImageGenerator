
# Bing Image Generator
Bing Image Generator is a simple command-line tool that lets you generate images from a given text. It uses the [Bimg](https://github.com/nociza/Bimg) library to create images from the supplied text.

## Project installation
Before using the Bing image generator, make sure you have Node.js installed on your system. You can download it from [Node.org](https://nodejs.org/fr).

Then run the command below to install the dependencies:

`
npm install
`

For everything to work, you need to create an .env file and enter the BING_IMAGE_COOKIE.
To retrieve this BING_IMAGE_COOKIE, go to [bing.create](https://www.bing.com/create) and register. Once you're logged in, open the Inspector and go to the Application tab, then Cookies and take the value of the cookie named '_U'.

```
.env

BING_IMAGE_COOKIE = cookie value _U
```

## Using the project
Run the following command to launch the generator:

`
npm start
`

You will be prompted to enter the prompt you want to generate the image. 
You will then be prompted to enter the name of the generated image.

## Example
Here's an example of how to use the Bing image generator:

```
npm start

Enter text: A lion holding a book in its paws
Enter image name: lion_image

```

License
This project is licensed under the MIT license - see the LICENSE file for details.

## 🔗 Liens
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://www.tmauc.fr/thomas)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/tmauc/)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/MaucSama)

