import { JournalLayout } from "../layout/JournalLayout"
import { NothingSelectedView } from "../views"

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius perferendis distinctio asperiores ut sapiente reprehenderit debitis voluptatum aut doloremque at perspiciatis ratione minus fugit, facilis accusamus officiis explicabo dicta maiores.
      </Typography> */}

      <NothingSelectedView />

    </JournalLayout>
    )
}
