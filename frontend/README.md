# Frontend for chatvy

1. user signin, create a pub key and his nodes.
2. user creates a chat room
   1. There will be a chatvy node, gun.get('chatvy'), and all the chat room
      will be inside that chatvy node. Search if there is existing chat room with the name the user types in. 1. If not there, create a node with chat name gun.get('chatvy').get('chatroomname').get('admin').put({key:admin_pub_key}) and under user(your own chain) put user.get('myrooms').put({chat_room_name: unique_key}). (one trick, encrypt the unique_key with the salt as chat room name) 2. If there, get the admin pub key, go to his chain, gun.user(admin_pub_key).get('myroom').once() function. decrypt using the chat room and get the unique_key, and then create the same thing - under user(your own chain) put user.get('myrooms').put({chat_room_name: unique_key}).
3. Chat encryption in the chat room
   Chats will be encrypted with that value that comes from decrypt(unique_key,chat_room_name).
