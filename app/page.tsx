'use client';

import axios, { AxiosError } from 'axios';
import { useState, useEffect } from 'react';
import GiftCard from '@/app/GiftCard';

type GiftCardData = {
    name: string;
    photo: string;
    password: string;
    dueTo: string;
};

export default function HomePage() {
    const [giftCards, setGiftCards] = useState([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getGiftCards = async () => {
            try {
                const response = await axios.get('/api/giftcards');
                setGiftCards(response.data.data);
            } catch (errorInCatchBlock) {
                if (axios.isAxiosError(errorInCatchBlock)) {
                    console.error(
                        'APIリクエストでエラーが発生しました:',
                        errorInCatchBlock.response?.data || 'エラー情報が取得できません'
                    );
                    setError(errorInCatchBlock.response?.data?.message || 'エラー情報が取得できません');
                } else {
                    console.error('その他エラーが発生しました:', errorInCatchBlock);
                    setError('その他エラーが発生しました: ' + errorInCatchBlock);
                }
            }
        };

        getGiftCards();
    }, []);

    if (error) {
        return <div>エラーが発生しました: {error}</div>;
    }

    return (
        <div className="card">
            {giftCards.map((item) => (
                <GiftCard {...item} key={item.name} />
            ))}
        </div>
    );
}
