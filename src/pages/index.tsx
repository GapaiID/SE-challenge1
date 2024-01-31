import { Search2Icon } from '@chakra-ui/icons';
import {
  Box,
  Heading,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Tag,
  Text,
} from '@chakra-ui/react';
import { RECIPES } from '../constants/recipes';

const Index = () => {
  return (
    <Stack justifyContent={'center'}>
      <Heading my={3} textAlign={'center'}>
        Recipes Book
      </Heading>

      <Stack width={'70%'} mx={'auto'} my={5} gap={5}>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <Search2Icon color="gray.300" />
          </InputLeftElement>
          {/* TODO: add functionality */}
          <Input placeholder="Search recipe name/ingredients" />
        </InputGroup>

        <Stack direction="row" gap={2} alignItems="center">
          <Text mr={3}>Filter: </Text>
          {/* TODO: add functionality */}
          <Tag size="lg">Breakfast</Tag>
          <Tag size="lg">Lunch</Tag>
          <Tag size="lg">Dinner</Tag>
          <Tag size="lg">Dessert</Tag>
        </Stack>

        {RECIPES.map((recipe) => (
          <Stack
            direction="row"
            key={recipe.id}
            justifyContent={'space-between'}
            gap={2}
          >
            <Box>
              <Heading as="h2" size="lg">
                {recipe.name}
              </Heading>
              <Tag>{recipe.category}</Tag>
              <Text>
                Waktu memasak: {recipe.cookingTime.amount}{' '}
                {recipe.cookingTime.unit}
              </Text>
              <Text>
                Bahan:{' '}
                {recipe.ingredients.map((ingredient, i) => (
                  <span>
                    {ingredient.name}
                    {i < recipe.ingredients.length - 1 ? ', ' : ''}
                  </span>
                ))}
              </Text>
            </Box>
            <Image src={recipe.image} alt={recipe.name} width="20vw" />
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Index;
