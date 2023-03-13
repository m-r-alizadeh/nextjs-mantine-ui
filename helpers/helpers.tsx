import { IconHome, IconBell,IconNote } from "@tabler/icons";
const SpotLightActions = [
    {
      title: 'Home',
      description: 'Get to home page',
      onTrigger: () => console.log('Home'),
      icon: <IconHome size={18} />,
    },
    {
      title: 'Dashboard',
      description: 'Get full information about current system status',
      onTrigger: () => console.log('Dashboard'),
      icon: <IconBell size={18} />,
    },
    {
      title: 'Documentation',
      description: 'Visit documentation to lean more about all features',
      onTrigger: () => console.log('Documentation'),
      icon: <IconNote size={18} />,
    },
  ]
  
  export default SpotLightActions