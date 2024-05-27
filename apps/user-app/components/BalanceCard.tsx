import { Card } from "@repo/ui/card"


export const BalanceCard = ({amount,locked}:{amount:number, locked:number}):JSX.Element=>{
    return (
        <Card title={"Balance"}>
                <div className="flex justify-between border-b border-slate-300 py-2">
                    <div>
                        Unlocked balance
                    </div>
                    <div>
                        {amount/100} INR
                    </div>
                </div>
                <div className="flex justify-between border-b border-slate-300 py-2">
                    <div>
                        Locked balance
                    </div>
                    <div>
                        {locked/100} INR
                    </div>
                </div>
                <div className="flex justify-between border-b border-slate-300 py-2">
                    <div>
                        Total balance
                    </div>
                    <div>
                        {(amount+locked)/100} INR
                    </div>
                </div>
        </Card>
    )
}