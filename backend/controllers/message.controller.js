import Conversation from "../model/conversation.model.js";
import Message from "../model/message.model.js";

export const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const { id: receiverId } = req.params;
        const senderId = req.user._id; 

        // console.log(senderId, " ", receiverId, " ", message);

        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId]}
        });

        if(!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId]
            });
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message
        });

        if(newMessage) { 
            conversation.messages.push(newMessage._id);
        }

        // SOCKET IO functionality will come here

        /** This will run sequentially
         * 
         * await newMessage.save();
         * await conversation.save();
         */

        // this will run in parallel
        await Promise.all([newMessage.save(), conversation.save()]);

        res.status(201).json(newMessage);

    } catch (error) {
        console.log("Error in sendMessage controller", error.message);
        res.status(500).json({error: "Internal Server Error"});
    }
}

export const getMessage = async (req, res) => {
    try {
        const { id: userToChatId } = req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, userToChatId]},
        }).populate("messages"); // NOT REFERENCE BUT ACTUAL MESSAGES

        console.log(conversation);

        if(!conversation) return res.status(200).json([]);

        const messages = conversation.messages;

        res.status(201).json(messages);
    } catch (error) {
        console.log("Error in getMessage controller", error.message);
        res.status(500).json({error: "Internal Server Error"});
    }
}