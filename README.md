# Youtube to MP3 for VCMP

Youtube to MP3 API created in NodeJS for VCMP

## A small guide using heroku

1. Fork this github repository

2. Sign up/login to Heroku: https://www.heroku.com/

3. After you have logged in, create a new app (without pipeline).

4. goto settings and click on add buildpacks. First click on NodeJS and then click on Save changes.
   After that, click on add buildpacks again and enter this URL:
   https://github.com/jonathanong/heroku-buildpack-ffmpeg-latest.git
   and press Save changes

5. After that, goto deply. You can deploy using any method you like, I prefer github. Enter the repo name and click search then click connect

6. Go to manual deploy and click deploy branch. It might take a few mins so sit tight

7. Once deployed, click on view and copy the URL and use that in your app
