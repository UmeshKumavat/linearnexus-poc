import { Module } from '@nestjs/common';
import { HealthModule } from './modules/health/health.module';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { EmailAccountsModule } from './modules/email-accounts/email-accounts.module';
import { InboxModule } from './modules/inbox/inbox.module';
import { ContactsModule } from './modules/contacts/contacts.module';
import { LeadsModule } from './modules/leads/leads.module';
import { AiModule } from './modules/ai/ai.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';

@Module({
  imports: [
    HealthModule,
    AuthModule,
    UsersModule,
    EmailAccountsModule,
    InboxModule,
    ContactsModule,
    LeadsModule,
    AiModule,
    DashboardModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
