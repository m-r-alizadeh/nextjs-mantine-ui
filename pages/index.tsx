import {
  Box,
  Button,
  Center,
  Divider,
  Text,
  Paper,
  ScrollArea,
  SimpleGrid,
  Title,
} from "@mantine/core";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Next App</title>
        <meta name="description" content="Next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Paper
        radius={0}
        p="xs"
        component={ScrollArea}
        style={{
          height: "calc(100vh - 110px)",
          backgroundColor: "transparent",
        }}
      >
        <main
          style={{
            width: "min(1200px , 90%)",
            margin: "auto",
          }}
        >
          <Box style={{ width: "100%", height: 200 }}>
            <Center component={Box} mb={10}>
              <Title order={2}>Welcome &mdash; (username) </Title>
            </Center>
          </Box>
          <SimpleGrid cols={3} spacing="sm" mt={10}>
            <Paper p={5}>
              <Center>Last Test Run</Center>
            </Paper>
            <Paper p={5}>
              <Center>Your Last test</Center>
            </Paper>
            <Paper p={5}>
              <Center>Most Tests run on</Center>
            </Paper>
            <Paper p={5}>
              <Center>Yor total tests</Center>
            </Paper>
            <Paper p={5}>
              <Center>Total tests in the suite</Center>
            </Paper>
            <Paper p={5}>
              <Center>Most run test suite</Center>
            </Paper>
            <Paper p={5}>
              <Center>Most tests run by</Center>
            </Paper>
          </SimpleGrid>
          <Text component="span">- Nav with Button</Text>
          <SimpleGrid mt={10} mb={10} cols={2}>
            <Button
              component={Link}
              href="/user"
              leftIcon={<IconArrowLeft />}
              variant="default"
              loading={false}
              fullWidth
            >
              <span>Go to Notification</span>
            </Button>
            <Button
              component={Link}
              href="/user"
              rightIcon={<IconArrowRight />}
              variant="default"
              loading={false}
              fullWidth
            >
              <span>Go to User</span>
            </Button>
          </SimpleGrid>
          <Text component="span">- Nav with Custom Style</Text>
          <SimpleGrid
            mt={10}
            cols={2}
            breakpoints={[{ maxWidth: 1000, cols: 1 }]}
          ></SimpleGrid>
        </main>
        <footer>قدرت گرفته از نکست</footer>
      </Paper>
    </>
  );
}
