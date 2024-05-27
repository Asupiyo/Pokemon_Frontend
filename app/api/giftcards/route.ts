import { NextResponse } from 'next/server';

export async function GET() {
    return NextResponse.json({
        data: [
            {
                name: 'あすぴよのスワンナ',
                photo: 'https://www2.koro-pokemon.com/img2/suwanna.png',
                password: 'Asupiyosuwannna',
                dueTo: '2024年11月8日',
            },
            {
                name: 'やばいスリーパー',
                photo: 'https://img.yakkun.com/poke/icon960/n97.png',
                password: 'Yabaisleeper',
                dueTo: '2024年7月21日',
            },
            {
                name: 'かわいいサーナイト',
                photo: 'https://th.bing.com/th/id/R.d18f1e2b073e3c68324d99acc38e59d0?rik=NV5S41Tz7LiquA&riu=http%3a%2f%2fimg.yakkun.com%2fpoke%2fxy%2fn282.gif&ehk=vB7qeheMuX0Y8cFTGRCVz5BE5WBFJVeYJkemo8MULzs%3d&risl=&pid=ImgRaw&r=0',
                password: 'r18sernight',
                dueTo: '2024年11月22日',
            },
            {
                name: 'ダグトリオ',
                photo: 'https://th.bing.com/th/id/OIP.Qzi3290L9CIX8c8pDSibqQAAAA?w=167&h=180&c=7&r=0&o=5&dpr=1.7&pid=1.7',
                password: 'ettinadagutorio',
                dueTo: '2024年12月25日',
            },
        ],
    });
}
