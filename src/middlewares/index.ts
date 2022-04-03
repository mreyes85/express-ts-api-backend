import { Errback, Request, Response, NextFunction } from "express"

export const defaultMiddleware = (req: Request, res: Response, next: NextFunction) => {
    if(req.headers['authorization']){
        // Validate Authorization
        const authorize = true
        if(!authorize)res.status(401).send('Unauthorized')        
    }
    next('route')
}

export const errorMiddleware = (err: Errback, req: Request, res: Response, next: NextFunction) => {
    console.log('Error Middleware!')
    if (res.headersSent)return next(err)
    res.status(500)
    res.render('error', { error: err })
}