import { useEffect, useRef } from 'react'

const clickListener = (
	{ target }: MouseEvent,
	setOpen: React.Dispatch<React.SetStateAction<boolean>>
) => {
	const dialogTarget = target as HTMLElement

	if (dialogTarget?.nodeName === 'DIALOG') {
		;(dialogTarget as HTMLDialogElement)?.close('dismiss')
    setOpen(false)
	}
}

export const useModal = (open: boolean, setOpen: React.Dispatch<React.SetStateAction<boolean>>) => {
	const modalRef = useRef<HTMLDialogElement>(null)

	useEffect(() => {
		if (!modalRef.current) return
		open ? modalRef.current.showModal() : modalRef.current.close()

		open
			? modalRef.current.addEventListener('click', (e) => clickListener(e, setOpen))
			: modalRef.current?.removeEventListener('click', (e) => clickListener(e, setOpen))

		return () => {
			modalRef.current?.removeEventListener('click', (e) => clickListener(e, setOpen))
		}
	}, [open, setOpen])

	return { modalRef }
}
