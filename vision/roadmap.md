---
sidebar_label: Roadmap
sidebar_position: 1
---

# Roadmap

Here are a few details about what we've shipped recently, what we're working on, and what's in store for XMTP in the months ahead.

---

## Researching 🔬

Scoping goals, requirements, and effort via research & proofs of concepts.

### Group chat

Users will be able to send messages to group chats with 2+ participants.

### Team inboxes

Teams will be able to read and send encrypted DMs and announcements using a shared team identity. The account admin will be able to delegate access to and revoke access from individual team user accounts.

### Post delivery storage

Users will be able to store their messaging data off-network.

### Implement Signal protocol

xmtp-js SDK will achieve parity with the Signal protocol for security features like forward secrecy, post-compromise secrecy, and more.

### Account abstraction

Support account abstraction, enabling smart contract wallets and non-EVM addresses to be compatible with XMTP.

---

## In progress 🏗️

Projects in flight.

### Network decentralization milestones

XMTP Labs will specify a phased approach towards architectural and logical decentralization of the network.

### Private testnet - Phase 1

Implement control plane sharding and topic replication in a private test environment.

### Compromise recovery

Users will be able to recover their compromised XMTP identity by creating new private keys.

### App permissions

Users will be able to grant explicit permission for an app to use their account across sessions and will be able to revoke this permission at any time.

### Secure key storage alternatives

Users will be able to store XMTP private keys in secure contexts such as wallet apps.

### UI Kit & React Hooks SDK

Enable developers to focus on differentiating features by providing reusable messaging components via a [UI kit & React Hooks SDK](https://github.com/xmtp/xmtp-react).

---

## Pre-Preview 👀

A super early peek into what we're building. Ready for exploration, not adoption.

### Mobile support for React Native

Developers will be able to build mobile client apps in [React Native](https://github.com/xmtp/xmtp-js/issues/170).

---

## Developer Preview 🧑‍💻

Opportunity to test, validate, and provide feedback. We do not recommend usage in production apps just yet.

### Build Android apps in Kotlin

Developers will be able to build Android apps in Kotlin using the [`xmtp-android` SDK](https://github.com/xmtp/xmtp-android).

### Push notifications - example server

Apps will be able to leverage an example server to subscribe users for push notifications to their devices upon receiving new messages.

- [Push example server repo](https://github.com/xmtp/example-notification-server-go)

---

## General Availability ✅

### Build JavaScript and React apps

Developers are able to build apps in JavaScript and React with the [`xmtp-js` SDK](/docs/tutorials/quickstart).

### Build iOS apps in Swift

Developers are able to build iOS apps in Swift using the [`xmtp-ios` SDK](/docs/client-sdk/swift/tutorials/quickstart).

### Build Flutter and mobile apps in Dart

Developers are able to build Flutter and mobile apps in Dart using the [`xmtp-flutter` SDK](/docs/client-sdk/dart/tutorials/quickstart).

### XMTP v2 (December 2022)

#### Conversation filtering

Developers can now group and filter conversations in a particular context using conversationId.

#### Participant privacy

Network clients responsible for relaying and storing messages can no longer observe the addresses of participants in ongoing conversations.

_For more information about delivered features and fixes, see [XMTP releases and updates](/docs/concepts/xmtp-releases)._

<!--
## Researching

Read the [XMTP litepaper]() to learn about key concepts on XMTP's research roadmap.
-->
