export function imagesList(props) {
  const list = [
    { url: require(`../assets/phonesPics/${props}/tras.jpg`) },
    { url: require(`../assets/phonesPics/${props}/frenteOn.jpg`) },
    { url: require(`../assets/phonesPics/${props}/frenteOff.jpg`) },
    { url: require(`../assets/phonesPics/${props}/cima.jpg`) },
    { url: require(`../assets/phonesPics/${props}/baixo.jpg`) },
    { url: require(`../assets/phonesPics/${props}/lado1.jpg`) },
    { url: require(`../assets/phonesPics/${props}/lado2.jpg`) },
  ];
  return list;
}
