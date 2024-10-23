import { useEffect, useRef } from 'react'

const clickListener = ({ target }: MouseEvent) => {
	const dialogTarget = target as HTMLElement

	if (dialogTarget?.nodeName === 'DIALOG') {
		;(dialogTarget as HTMLDialogElement)?.close('dismiss')
	}
}

export const useModal = (open = false) => {
	const modalRef = useRef<HTMLDialogElement>(null)

	useEffect(() => {
		if (!modalRef.current) return
		open ? modalRef.current.showModal() : modalRef.current.close()

		open
			? modalRef.current.addEventListener('click', clickListener)
			: modalRef.current?.removeEventListener('click', clickListener)

		return () => {
			modalRef.current?.removeEventListener('click', clickListener)
		}
	}, [open])

	return { modalRef }
}
