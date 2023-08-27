import { useDisclosure } from '@mantine/hooks';
import { Modal, Group, Button } from '@mantine/core';

export default function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title="Authentication"
        centered
        transitionProps={{
          transition: 'fade',
          duration: 600,
          timingFunction: 'linear',
        }}
      >
        {/* Modal content */}
      </Modal>

      <Group position="center">
        <Button onClick={open}>Open centered Modal</Button>
      </Group>
    </>
  );
}
