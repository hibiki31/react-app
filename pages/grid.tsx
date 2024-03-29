import { IconHeart } from '@tabler/icons-react';
import {
  Card,
  Image,
  Text,
  Group,
  Badge,
  Button,
  ActionIcon,
  createStyles,
  Grid,
  Container,
  rem,
} from '@mantine/core';

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    margin: '20px',
  },

  section: {
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    paddingBottom: theme.spacing.md,
  },

  like: {
    color: theme.colors.red[6],
  },

  label: {
    textTransform: 'uppercase',
    fontSize: theme.fontSizes.xs,
    fontWeight: 700,
  },
}));

interface BadgeCardProps {
  image: string;
  title: string;
  country: string;
  description: string;
  badges: {
    emoji: string;
    label: string;
  }[];
}

export default function Test() {
  return (
    <Container size="lg" px="xs">
      <Grid>
        <Grid.Col span={4}>
          <BadgeCard
            image="https://ichigoproduction.com/core_sys/images/main/kv/kv6.jpg"
            title="ぱっぱ"
            description="aa"
            country="aa"
            badges={[
              {
                emoji: '🧚🏻‍♂️',
                label: 'Yo Say',
              },
            ]}
          ></BadgeCard>
        </Grid.Col>
        <Grid.Col span={4}>
          <BadgeCard
            image="https://frieren-anime.jp/wp-content/themes/frieren_2023/assets/img/top/top/1_visual.jpg"
            title="ぱっぱ"
            description="aa"
            country="aa"
            badges={[
              {
                emoji: '🧚🏻‍♂️',
                label: 'Yo Say',
              },
            ]}
          ></BadgeCard>
        </Grid.Col>
        <Grid.Col span={4}>
          <BadgeCard
            image="https://millionlive-anime.idolmaster-official.jp/Is370IbVyq/wp-content/themes/ani-million-v2/assets/home/kv_.jpg"
            title="ぱっぱ"
            description="aa"
            country="aa"
            badges={[
              {
                emoji: '🧚🏻‍♂️',
                label: 'Yo Say',
              },
            ]}
          ></BadgeCard>
        </Grid.Col>
      </Grid>
    </Container>
  );
}

export function BadgeCard({
  image,
  title,
  description,
  country,
  badges,
}: BadgeCardProps) {
  const { classes, theme } = useStyles();

  const features = badges.map((badge) => (
    <Badge
      color={theme.colorScheme === 'dark' ? 'dark' : 'gray'}
      key={badge.label}
      leftSection={badge.emoji}
    >
      {badge.label}
    </Badge>
  ));

  return (
    <Card withBorder radius="md" p="md" className={classes.card}>
      <Card.Section>
        <Image src={image} alt={title} height={180} />
      </Card.Section>

      <Card.Section className={classes.section} mt="md">
        <Group position="apart">
          <Text fz="lg" fw={500}>
            {title}
          </Text>
          <Badge size="sm">{country}</Badge>
        </Group>
        <Text fz="sm" mt="xs">
          {description}
        </Text>
      </Card.Section>

      <Card.Section className={classes.section}>
        <Text mt="md" className={classes.label} c="dimmed">
          Perfect for you, if you enjoy
        </Text>
        <Group spacing={7} mt={5}>
          {features}
        </Group>
      </Card.Section>

      <Group mt="xs">
        <Button radius="md" style={{ flex: 1 }}>
          Show details
        </Button>
        <ActionIcon variant="default" radius="md" size={36}>
          <IconHeart size="1.1rem" className={classes.like} stroke={1.5} />
        </ActionIcon>
      </Group>
    </Card>
  );
}
