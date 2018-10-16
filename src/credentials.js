import {
    GoogleRedirectCredential,
    Stitch,
    RemoteMongoClient,
    AnonymousCredential
} from "mongodb-stitch-browser-sdk";

export const StitchClient = Stitch.initializeDefaultAppClient('rtfm-wysqi');

export const GoogleCredentials = new GoogleRedirectCredential();

