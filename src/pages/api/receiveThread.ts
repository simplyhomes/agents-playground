import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
    status: string;
    message?: string;
};

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    if (req.method === 'POST') {
        const { threadId } = req.body;

        if (!threadId) {
            res.status(400).json({ status: 'error', message: 'threadId is required' });
            return;
        }

        console.log("Received threadId:", threadId);

        // You can store this threadId in session, local storage, or state management (e.g., Redux)
        // For simplicity, we're just logging it to the console here

        res.status(200).json({ status: 'success' });
    } else {
        res.status(405).json({ status: 'error', message: 'Method not allowed' });
    }
}
