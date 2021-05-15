## Getting Started

First of all we need DATABASE_ID and Internal Integration Token.

[Getting Started Notion API](https://developers.notion.com/docs/getting-started 'Getting Started Notion API')

## 1- How can I find a Notion Integration Token?

Open your integrations. Use the button to create a new integration. Give [your integrations](https://www.notion.so/Sharing-permissions-524c32ac63dc424a842891ace7a99bf8 'notion link') a name - I chose "Vacation Planner". Submit to create the integration.

![GIF](https://files.readme.io/2ec137d-093ad49-create-integration.gif)

Find the Internal Integration Token under Secrets = NOTION_TOKEN

## 2- Share a database with your integration & and access the DATABASE_ID.

- Integrations built with the API follow a similar permission system to the [sharing permissions for users](https://www.notion.so/Sharing-permissions-524c32ac63dc424a842891ace7a99bf8 'notion link').

- There's an important difference: integrations don't have access to any pages (or databases) in the workspace at first. A user must share specific pages with an integration in order for those pages to be accessed using the API. This helps keep you and your team's information in Notion secure.

- Start from a new or existing page in your workspace. Insert a new database by typing /table and selecting a full page table. Give it a title. I've called mine "Weekend getaway destinations". Click on the Share button and use the selector to find your bot by its name. After selecting your bot, click Invite.

![GIF](https://files.readme.io/0a267dd-share-database-with-integration.gif)

Your integration now has permission to read, write, and edit the new database. Once an integration is added to a workspace, any member can share pages and databases with that integration - there's no requirement to be an Admin for this step.

Before moving on, you need the ID of the database you just created.

- If you're using the Notion desktop app, click on the Share button once again and select Copy link. Paste and navigate to this URL in your browser. You may need to log into the Notion workspace if you haven't already. Follow the instructions for the browser in the next bullet.
- If you're using Notion in a browser and viewing the database as a full page, the database ID is the part of the URL after your workspace name and the slash (acme/) and before the question mark (?). The ID is 32 characters long, containing numbers and letters. Copy the ID and paste it somewhere you can easily find later.

`https://www.notion.so/myworkspace/a8aec43384f447ed84390e8e42c2e089?v=...`

a8aec43384f447ed84390e8e42c2e089 = DATABASE_ID

---

- Then add the NOTION_TOKEN and DATABASE_ID in .env.example and rename the filename to ".env"

## Now run the development server:

```bash
npm i
npm run dev
# or
yarn
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
