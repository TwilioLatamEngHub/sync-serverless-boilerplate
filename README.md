# Sync Serverless CRUD Boilerplate

A Twilio Serverless Service sample code to create, read and update Twilio Sync documents

## Requirements

* [Twilio CLI](https://www.twilio.com/docs/twilio-cli/quickstart)
* [Twilio Serverless Toolkit](https://www.twilio.com/docs/labs/serverless-toolkit)

## Usage

From within a Twilio Studio flow, use the **Run Function** widget to call the specific functions

### Creating a Document

Pass the document object as a parameter, structured like the **[Sync](https://www.twilio.com/docs/sync/api/document-resource?code-sample=code-retrieve-all-documents-using-the-rest-api&code-language=Node.js&code-sdk-version=3.x#create-a-document-resource)** documentation. If the creation fails due to the existance of a document with the same unique name, the existing one will be updated 

### Fetching a Document

Pass the unique name as the *id* parameter

## Setup


The plugin includes a service used to fetch personas data using a **Twilio Function**, so the plugin doesn't have to call the API directly and expose Segment credentials. To deploy it, follow the procedure below:

```bash
cd serverless
```

```bash
cp .env.example .env
```

Fill the `.env` file with you Segment account info:

| Config&nbsp;Value | Description                                                                                                                                                  |
| :---------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Twilio Sync Service SID | Identifier for your Sync Service account. To obtain it, go to the [Sync Dashboard](https://console.twilio.com/us1/develop/sync/services).                                    |



Run

```bash
twilio serverless:deploy
```


