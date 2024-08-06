---
layout: post
title: Integrating GraphQL with React Native; Apollo Client and Relay Client
subtitle: A Comprehensive Guide to Setting Up GraphQL with Apollo and Relay in Your React Native App
tags: [GraphQL, React Native, Apollo Client, Relay Client]
thumbnail-img: assets/img/post/graphql/apolo-relay.png
share-img: /assets/img/post/graphql/graph-ql.webp
comments: true
mathjax: true
author: Rajan Maharjan
---

![GraphQL with React Native](/assets/img/post/graphql/apolo-relay.png)

In this guide, we will explore how to integrate GraphQL with React Native using two popular clients: **Apollo Client** and **Relay Client**. Both libraries offer powerful tools for working with GraphQL, but they have different approaches and features. 

We will cover:

- **Apollo Client Setup**  
  Integrate Apollo Client with React Native and connect to a GraphQL server.

- **Relay Client Setup**  
  Configure Relay Client in your React Native project and set up a GraphQL environment.

<p>&nbsp;</p>
## APOLLO CLIENT SETUP
<p>&nbsp;</p>

1. **Install Apollo Client and Dependencies**

   Install Apollo Client and related libraries using Yarn or npm:

   ```bash
   yarn add @apollo/client graphql
   ```
   or

   ```bash
   npm install @apollo/client graphql
   ```
    <!-- Adding a blank line for spacing -->
2. **Set Up Apollo Client**

   Create an Apollo Client instance and configure it to connect to your GraphQL server. In your project directory, create a file named `ApolloClient.js`:

   ```javascript
    // ApolloClient.js
    import { ApolloClient, InMemoryCache } from '@apollo/client';

    const client = new ApolloClient({
    uri: 'https://your-graphql-endpoint.com/graphql',
    cache: new InMemoryCache(),
    });

    export default client;
    ```
    <!-- Adding a blank line for spacing -->
3. **Integrate Apollo Client with React Native**

   Wrap your application in an `ApolloProvider` to provide Apollo Client to your React Native components. Update your `App.js` file:

   ```javascript
    // App.js
    import React from 'react';
    import { ApolloProvider } from '@apollo/client';
    import client from './ApolloClient';
    import YourMainComponent from './YourMainComponent';

    const App = () => (
    <ApolloProvider client={client}>
        <YourMainComponent />
    </ApolloProvider>
    );

    export default App;
    ```

    <!-- Adding a blank line for spacing -->
4. **Integrate Apollo Client with React Native**

   Wrap your application in an `ApolloProvider` to provide Apollo Client to your React Native components. Update your `App.js` file:

   ```javascript
    // YourComponent.js
    import React from 'react';
    import { Text, View } from 'react-native';
    import { useQuery, gql } from '@apollo/client';

    const GET_ITEMS = gql`
    query GetItems {
        items {
        id
        name
        }
    }
    `;

    const YourComponent = () => {
    const { loading, error, data } = useQuery(GET_ITEMS);

    if (loading) return <Text>Loading...</Text>;
    if (error) return <Text>Error: {error.message}</Text>;

    return (
        <View>
        {data.items.map(item => (
            <Text key={item.id}>{item.name}</Text>
        ))}
        </View>
    );
    };

    export default YourComponent;
    ```

<p>&nbsp;</p>
## RELAY CLIENT SETUP
<p>&nbsp;</p>

1. **Install Relay Client and Dependencies**

    Install Relay and related packages:

    ```bash
    yarn add react-relay relay-runtime graphql
    ```
    or

    ```bash
    npm install react-relay relay-runtime graphql
    ```
    <!-- Adding a blank line for spacing -->

2. **Set Up Relay Environment**

    Create a Relay Environment instance and configure it. In your project directory, create a file named `RelayEnvironment.js`:

    ```javascript
    // RelayEnvironment.js
    import { Environment, Network, RecordSource, Store } from 'relay-runtime';

    const fetchQuery = async (operation, variables) => {
    const response = await fetch('https://your-graphql-endpoint.com/graphql', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({
        query: operation.text,
        variables,
        }),
    });
    return response.json();
    };

    const environment = new Environment({
    network: Network.create(fetchQuery),
    store: new Store(new RecordSource()),
    });

    export default environment;
    ```
    <!-- Adding a blank line for spacing -->

3. **Integrate Relay Environment with React Native**

    Use the RelayEnvironmentProvider to provide Relay Environment to your components. Update your `App.js` file:

    ```javascript
    // App.js
    import React from 'react';
    import { RelayEnvironmentProvider } from 'react-relay';
    import environment from './RelayEnvironment';
    import YourMainComponent from './YourMainComponent';

    const App = () => (
    <RelayEnvironmentProvider environment={environment}>
        <YourMainComponent />
    </RelayEnvironmentProvider>
    );

    export default App;
    ```
    <!-- Adding a blank line for spacing -->

4. **Querying Data with Relay Client**

    Use the `useLazyLoadQuery` hook to fetch data in your components. For example:

    ```javascript
    // YourComponent.js
    import React from 'react';
    import { Text, View } from 'react-native';
    import { graphql, useLazyLoadQuery } from 'react-relay/hooks';

    const GetItemsQuery = graphql`
    query YourComponentQuery {
        items {
        id
        name
        }
    }
    `;

    const YourComponent = () => {
    const data = useLazyLoadQuery(GetItemsQuery, {});

    return (
        <View>
        {data.items.map(item => (
            <Text key={item.id}>{item.name}</Text>
        ))}
        </View>
    );
    };

    export default YourComponent;
    ```
    <!-- Adding a blank line for spacing -->

<p>&nbsp;</p>
## Summary
- Apollo Client is easy to set up and offers a flexible approach to managing GraphQL queries and caching.
- Relay Client provides a powerful, declarative approach to data fetching with built-in support for pagination and data normalization.

What other GraphQL topics would you like to see covered? Let me know in the comments!