## Intro
Simple node/express app, configured to run in AWS Lambda.

### How to run it
You will need Node.js to run this.
The app was tested with Node.js 16 but it probably works with other versions, too.

Once you have Node.js installed, `cd` into the app directory and run `npm install`.

Then you can deploy the entire directory to Lambda and invoke it via a Funtion URL or an API Gateway.

---

Once deployed to Lambda, it has 2 endpoints you can call:
- `/status`
- `/echo/ARG` where `ARG` can be anything

It will log requests to `stdout` which will then be captured by CloudWatch Logs.