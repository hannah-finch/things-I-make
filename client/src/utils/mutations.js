import { gql } from "@apollo/client";

export const CREATE_ART_THING = gql`
  mutation CreateArtThing(
    $title: String
    $image: String
    $description: String
    $date: Date
  ) {
    createArtThing(
      title: $title
      image: $image
      description: $description
      date: $date
    ) {
      _id
      title
      description
      date
      image
    }
  }
`;

export const CREATE_CRAFT_THING = gql`
  mutation CreateCraftThing(
    $title: String
    $description: String
    $date: Date
    $image: String
  ) {
    createCraftThing(
      title: $title
      description: $description
      date: $date
      image: $image
    ) {
      _id
      title
      description
      date
      image
    }
  }
`;
