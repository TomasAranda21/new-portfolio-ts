import { MantineProvider, MantineProviderProps } from '@mantine/core'
import { Notifications } from "@mantine/notifications";
export const MantineWrapper = ( props : any) => {
    return (
        <MantineProvider theme={{
        colors: {
            'white': ['#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff'],
            'violet':  ['#CD0268', '#CD0268','#CD0268','#CD0268','#CD0268','#CD0268','#CD0268','#CD0268','#CD0268', '#CD0268']
          },}}>
        <Notifications position="bottom-right" zIndex={2077}  />
            {props.children}
        </MantineProvider>
    )
}