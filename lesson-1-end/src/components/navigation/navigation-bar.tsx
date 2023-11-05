import { FC } from 'react';
import { Flex, HStack, ListItem, UnorderedList } from '@chakra-ui/react';
import Link from 'next/link';

const NAVIGATION_ITEMS: Record<string, string> = {
  '/': 'All',
  '/types/adventure': 'Adventures',
  '/types/comedy': 'Comedy',
  '/types/family': 'Family',
};

export const NavigationBar: FC = () => {
  return (
    <Flex sx={{
      borderBottom: '1px solid',
      borderBottomColor: 'gray.400',
      paddingY: 2,
      position: 'sticky',
      top: 0,
      zIndex: 'sticky',
    }}>
      <HStack as={UnorderedList} listStyleType="none" marginLeft={0} spacing={4}>
        {Object.keys(NAVIGATION_ITEMS).map((path) => {
          return (
            <ListItem key={path}>
              <Link href={path}>
                {NAVIGATION_ITEMS[path]}
              </Link>
            </ListItem>
          );
        })}
      </HStack>
    </Flex>
  );
};