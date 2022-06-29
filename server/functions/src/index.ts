import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import { oauthAccess, usersInfo } from './slack';
import { URL } from 'url';

const  serviceAccount = require("../serviceAccountKey.json")

if (admin.apps.length < 1) {
  admin.initializeApp(
    {
      credential: admin.credential.cert(serviceAccount),
    }
  );
}

exports.authWithSlack = functions.https.onRequest(async (req, res) => {
  const slackAuthCode = req.query.code as string;
  const redirectUri = req.query.state as string;

  const functions = require("firebase-functions");

  functions.logger.log("slackAuthCode:", slackAuthCode);
  functions.logger.log("redirectUri:", redirectUri);

  if (!slackAuthCode) {
    console.warn('code query string not find.')
    res.status(400).end();
  }

  const userCredential = await oauthAccess(slackAuthCode);

  try {
    const customToken = await admin.auth().createCustomToken(userCredential.user_id);
    functions.logger.log("customToken:", customToken);

    if (redirectUri !== undefined) {
      const url = new URL(`http://localhost:3000/${redirectUri}`);
      url.search = `t=${customToken}`;
      functions.logger.log("url:", url);

      res.redirect(303, url.toString());
    } else {
      functions.logger.log("this is error elseeeee:"); 
      res.json({
        custom_token: customToken
      }).end();
    }
    return;
  } catch (e) {
    console.error('Failed to create custom token:', e)
  }
});