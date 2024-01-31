import { Button, IconButton } from '@chakra-ui/button';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import { Image } from '@chakra-ui/image';
import { Heading, ListItem, OrderedList, Stack, Text } from '@chakra-ui/layout';
import { useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { RECIPES } from '../constants/recipes';

const Detail = () => {
  const { id } = useParams();
  const recipe = RECIPES.find((r) => r.id === id);
  const [servings, setServings] = useState(recipe?.servings as number);
  // TODO: useReducer
  // const [cart, dispatch] = useReducer(reducer, initialCart);

  if (!recipe) {
    return (
      <Stack justifyContent={'center'} alignItems={'center'} height="90vh">
        <Stack width={{ lg: '50%' }} mx="auto">
          <Heading textAlign="center">Recipe not found</Heading>
          <Button as={Link} to={'/'}>
            Back to home
          </Button>
        </Stack>
      </Stack>
    );
  }
  return (
    <Stack py={5}>
      <Stack mx="auto" gap={5}>
        <Heading>{recipe.name}</Heading>
        <Stack direction={['column', 'row']} justifyContent="space-between">
          <Text>
            {recipe.cookingTime.amount} {recipe.cookingTime.unit}
          </Text>
          {/* servings increase-decrease */}
          <Stack direction="row">
            <IconButton
              icon={<MinusIcon />}
              aria-label={`kurangi porsi`}
              size="xs"
              ml={2}
              variant={'ghost'}
              onClick={() => setServings(servings > 1 ? servings - 1 : 1)}
            />
            <Text>{servings} porsi</Text>
            <IconButton
              icon={<AddIcon />}
              aria-label={`tambah porsi`}
              size="xs"
              ml={2}
              variant={'ghost'}
              onClick={() => setServings(servings + 1)}
            />
          </Stack>
        </Stack>
        <Image
          src={recipe.image}
          alt={recipe.name}
          width={{ base: '80vw', lg: '50vw' }}
        />

        {/* ingredients */}
        <Stack>
          <Text>Bahan:</Text>
          <OrderedList>
            {recipe.ingredients.map((ingredient) => (
              <ListItem>
                {ingredient.name} ({ingredient.amount * servings}{' '}
                {ingredient.unit})
                <IconButton
                  icon={<AddIcon />}
                  aria-label={`add ${ingredient.name} to cart`}
                  size="xs"
                  ml={2}
                  variant={'ghost'}
                  onClick={() => {}}
                />
              </ListItem>
            ))}
          </OrderedList>
        </Stack>

        {/* steps */}
        <Stack>
          <Text>Cara memasak:</Text>
          <OrderedList>
            {recipe.steps.map((step) => (
              <ListItem>{step}</ListItem>
            ))}
          </OrderedList>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Detail;
