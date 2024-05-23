import { Card, Group, Text } from '@mantine/core';
import classes from '@/app/CardWithStats.module.css';
import './page.css';

type Props = {
    key: string;
    name: string;
    photo: string;
    password: string;
    dueTo: string;
};

export default function GiftCard(props: Props) {
    return (
        <><Card withBorder padding="lg" className={classes.card}>
            <Text fz="sm" fw={700} className="outlined-text">
                {props.name}
            </Text>
            <Group>
                <img src={props.photo} alt="あすぴよのスワンナ" width="100" height="100" />
                <div>
                    <Text mt="sm" mb="md" c="dimmed" fz="xs">
                        あいことば:{props.password}
                    </Text>
                    <Text mt="sm" mb="md" c="dimmed" fz="xs">
                        受取期限:{props.dueTo}
                    </Text>
                </div>
            </Group>
          </Card>
        </>
    );
}
